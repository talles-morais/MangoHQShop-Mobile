import { ScrollView } from "react-native-gesture-handler";
import SimpleHeader from "../../components/SimpleHeader";
import {
  ProductWrapper,
  ProductTitle,
  ProductAuthor,
  ProductCover,
  ProductPrice,
  Stock,
  ProductDescriptionWrapper,
  ProductDescription,
  ProductMainWrapper,
  LearnMore
} from "./styles";
import { CustomText, MainWrapper } from "../Home/styles";
import { ImageBackground, Text } from "react-native";
import AddToCartButton from "../../components/AddToCartButton";
import api from "../../services/api";
import { useEffect, useState } from "react";
import ForYou from "../../components/ForYou";
import theme from "../../global/styles/theme";
import { NavigationProp, RouteProp, useRoute } from "@react-navigation/native";

interface BookProps {
  autor: string,
  capa: string,
  estoque: number,
  id: number,
  titulo: string,
  valor: number
}

interface BookResponse {
  data: BookProps[],
  msg: string
}

interface ProductProps {
  navigation: NavigationProp<any>;
}

type RootStackParamList = {
  Product: { produto: BookProps }; // Define a rota "Product" e os parâmetros esperados
};

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

export default function Product({ navigation }: ProductProps) {
  const [BookList, setBookList] = useState<BookProps[]>([]);
  const route = useRoute<ProductScreenRouteProp>();
  const produto = route.params?.produto;

  const fetchBooks = async () => {
    const response = await api.get<BookResponse>("/livros/");

    const data = response.data.data

    setBookList(data);
  }
  useEffect(() => {
    fetchBooks();
  }, [])

  const handleClickProduct = (book: BookProps) => {
    navigation.navigate("Product", { produto: book })
  }

  if (!produto) {

    return <Text>Parametros não recebidos</Text>
  }

  return (
    <ScrollView>
      <SimpleHeader title="Produto" navigation={navigation} />

      <ImageBackground source={require("../../../assets/background/bg-white.png")}>

        <ProductMainWrapper >
          <ProductWrapper>
            <ProductTitle>{produto.titulo}</ProductTitle>
            <ProductAuthor>{produto.autor}</ProductAuthor>

            <ProductCover source={{ uri: produto.capa }} />
            <Stock>{produto.estoque ? "Em estoque!" : "Sem estoque!"}</Stock>
            <ProductPrice> {`R$ ${produto.valor},00`} </ProductPrice>

            <AddToCartButton data={produto}/>
          </ProductWrapper>

          <ProductDescriptionWrapper
            style={{
              borderTopWidth: 2
            }}
          >
            <CustomText color={theme.colors.shape} fontsize={16}>
              Descrição do livro
            </CustomText>

            <ProductDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, itaque facere ipsam iusto qui autem minima quia eveniet voluptates, numquam consectetur facilis illum est ad blanditiis amet voluptatum! Alias, doloribus!
            </ProductDescription>

            <LearnMore>
              <CustomText color={theme.colors.shape} fontsize={12}>
                Para saber mais do livro:
              </CustomText>
              <AddToCartButton data={produto}/>
            </LearnMore>

          </ProductDescriptionWrapper>

          <ForYou onPress={handleClickProduct} length={3} booklist={BookList} />
        </ProductMainWrapper>
      </ImageBackground>

    </ScrollView>
  )
};

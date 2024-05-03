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
import { ImageBackground } from "react-native";
import AddToCartButton from "../../components/AddToCartButton";
import api from "../../services/api";
import { useEffect, useState } from "react";
import ForYou from "../../components/ForYou";
import theme from "../../global/styles/theme";

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

export default function Product() {
  const [BookList, setBookList] = useState<BookProps[]>([]);
  const fetchBooks = async () => {
    const response = await api.get<BookResponse>("/livros/");

    const data = response.data.data

    setBookList(data);
  }
  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <ScrollView>
      <SimpleHeader />

      <ImageBackground source={require("../../../assets/background/bg-white.png")}>

      <ProductMainWrapper >
        <ProductWrapper>
          <ProductTitle>Titulo</ProductTitle>
          <ProductAuthor>Autor</ProductAuthor>

          <ProductCover source={require("../../../assets/home/highlight.png")} />
          <Stock>disponivel</Stock>
          <ProductPrice>R$ 50,00</ProductPrice>

          <AddToCartButton />
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
            <AddToCartButton />
          </LearnMore>

        </ProductDescriptionWrapper>

        <ForYou length={3} booklist={BookList}/>
      </ProductMainWrapper>
      </ImageBackground>

    </ScrollView>
  )
};

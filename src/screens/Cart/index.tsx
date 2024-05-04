import { NavigationProp } from "@react-navigation/native";
import SimpleHeader from "../../components/SimpleHeader";
import SearchField from "../../components/SearchField";
import { FlatList, ImageBackground, ScrollView, Text } from "react-native";
import ForYou from "../../components/ForYou";
import { BuyButton, BuyMoreButton, BuyText, CartMainWrapper, CartTitle, Icon, MyCart, ShoppingActions } from "./styles";
import BookOnCart from "../../components/BookOnCart";
import { CustomText } from "../Home/styles";
import theme from "../../global/styles/theme";
import AddToCartButton from "../../components/AddToCartButton";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useCart } from "../../hooks/cart";

interface CartProps {
  navigation: NavigationProp<any>;
}

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

export default function Cart({navigation} : CartProps) {
  const [BookList, setBookList] = useState<BookProps[]>([])
  const cartSelection = useCart();

  const fetchBooks = async () => {
    const response = await api.get<BookResponse>("/livros/");

    const data = response.data.data

    setBookList(data);
  }
  useEffect(() => {
    fetchBooks();
  }, [])

  const handleClickProduct = (book: BookProps) => {
    navigation.navigate("Product", { produto: book})
  }

  const handleFinishShopping = async () => {
    const response = await api.put("/carrinho/finalizar", cartSelection?.cartItems)
    console.log(response.status);

  }


  return (
    <ScrollView>
        <SimpleHeader title="Carrinho" cart backTo="Home" navigation={navigation}>
          <SearchField />
        </SimpleHeader>

        <ImageBackground source={require("../../../assets/background/bg-white.png")} >
        <CartMainWrapper>
          <MyCart>
            <CustomText fontsize={16} color={theme.colors.shape}>Meu Carrinho</CustomText>
            <Text>Livros:</Text>

            { cartSelection?.cartItems.map((value) => (
              <BookOnCart key={value.id} data={value}/>
            ))}

            <ShoppingActions>
              <BuyMoreButton onPress={() => navigation.navigate("Home")}>
                <Icon name="arrow-back"/>
                <BuyText>Comprar mais</BuyText>
              </BuyMoreButton>

              <BuyButton onPress={handleFinishShopping}>
                <Icon name="shopping-cart-checkout"/>
                <BuyText>Finalizar Compra</BuyText>
              </BuyButton>
            </ShoppingActions>
          </MyCart>
          
          <ForYou 
            length={3}
            booklist={BookList}
            onPress={handleClickProduct}
          />
        </CartMainWrapper>
        </ImageBackground>
    </ScrollView>
  )
};

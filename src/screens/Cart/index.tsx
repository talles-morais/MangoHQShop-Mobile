import { NavigationProp } from "@react-navigation/native";
import SimpleHeader from "../../components/SimpleHeader";
import SearchField from "../../components/SearchField";
import { FlatList, ImageBackground, ScrollView, Text } from "react-native";
import ForYou from "../../components/ForYou";
import { BuyButton, BuyMoreButton, BuyText, CartMainWrapper, Icon, MyCart, ShoppingActions } from "./styles";
import BookOnCart from "../../components/BookOnCart";
import { CustomText } from "../Home/styles";
import theme from "../../global/styles/theme";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";

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
  const user = useAuth();

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
    

    const resp = await api.put("/carrinho/adicionar/", {
      id: user?.userLogged.id,
      livro: cartSelection?.cartItems
    }, {
      headers: {
        Authorization: `Bearer ${user?.userLogged.token}`
      }
    })
    console.log(resp.status);

    const response = await api.put("/carrinho/finalizar", {
      id: user?.userLogged.id,
    } , {
      headers: {
        Authorization: `Bearer ${user?.userLogged.token}`
      }
    })
    if(response.status == 200){
      navigation.navigate("OrderConfirmation")
      cartSelection?.cartItems.forEach((item) => {
      cartSelection.removeItem(item.id)
    })
    }
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

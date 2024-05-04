import { ImageBackground, ScrollView, Text } from "react-native";
import {
  CustomText,
  DecorLine,
  DevelopedBy,
  Footer,
  ForYouWrapper,
  Header,
  HeaderWrapper,
  MainWrapper,
  ProfilePicture,
  Promo,
  PromoBooks,
  SocialMedia
} from "./styles";
import MangoLogo from "../../../assets/header/logo.svg"
import ByronLogo from "../../../assets/footer/logo-byron.svg"
import SearchField from "../../components/SearchField";
import React, { useEffect, useState } from "react";
import theme from "../../global/styles/theme";
import SocialIcon from "../../components/SocialIcon";
import HighlightCarousel from "../../components/HighlightCarousel";
import BookCard from "../../components/BookCard";
import api from "../../services/api";
import ForYou from "../../components/ForYou";
import { NavigationProp } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

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

interface HomeProps {
  navigation: NavigationProp<any>;
}

export default function Home({navigation} : HomeProps) {
  const [BookList, setBookList] = useState<BookProps[]>([]);

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

  return (
    <ScrollView>
      {/* Header */}
      <ImageBackground source={require("../../../assets/background/bg-yellow.png")}>
        <HeaderWrapper>
          <Header>
            <MangoLogo width={80} height={48} />
            <ProfilePicture>
              <Text>profile</Text>
            </ProfilePicture>
          </Header>

          <SearchField />
        </HeaderWrapper>
      </ImageBackground>
      <DecorLine color={theme.colors.shape} />

      {/* Main */}
      <ImageBackground source={require("../../../assets/background/bg-white.png")}>
        <MainWrapper>

          <HighlightCarousel />

          {/* Promoções */}
          <Promo style={{
            borderTopWidth: 2,
            borderBottomWidth: 2
          }}>
            <CustomText style={{ marginBottom: 8 }} color={theme.colors.shape} fontsize={16}>
              Em Promoção!
            </CustomText>

            <PromoBooks>
              <BookCard onPress={() => handleClickProduct(BookList[13])} promo index={13} data={BookList} />
              <BookCard onPress={() => handleClickProduct(BookList[31])} promo index={31} data={BookList} />
              <BookCard onPress={() => handleClickProduct(BookList[35])} promo index={35} data={BookList} />
            </PromoBooks>
          </Promo>

          {/* Para você */}
          <ForYouWrapper>
            <ForYou onPress={handleClickProduct} length={6} booklist={BookList}/>
          </ForYouWrapper>

        </MainWrapper>
      </ImageBackground>


      {/* Footer */}
      <Footer>
        <CustomText color={theme.colors.shape} fontsize={16}>
          Entre em contato através das redes sociais:
        </CustomText>
        <SocialMedia>
          <SocialIcon iconName="mail" />
          <SocialIcon iconName="logo-whatsapp" />
          <SocialIcon iconName="logo-instagram" />
          <SocialIcon iconName="logo-facebook" />
        </SocialMedia>

        <DecorLine color={theme.colors.shape} />

        <DevelopedBy>
          <CustomText fontsize={16}>
            Desenvolvido por:
          </CustomText>
          <ByronLogo />
        </DevelopedBy>
      </Footer>
    </ScrollView>
  )
};
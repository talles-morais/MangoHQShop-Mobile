import { ImageBackground, Text, View } from "react-native";
import { CustomText, DecorLine, DevelopedBy, Footer, Header, HeaderWrapper, MainWrapper, ProfilePicture, SocialMedia } from "./styles";
import MangoLogo from "../../../assets/header/logo.svg"
import ByronLogo from "../../../assets/footer/logo-byron.svg"
import SearchField from "../../components/SearchField";
import React from "react";
import theme from "../../global/styles/theme";
import SocialIcon from "../../components/SocialIcon";
import CarouselItem from "../../components/CarouselItem";
import HighlightCarousel from "../../components/HighlightCarousel";

export default function Home() {
  return (
    <View>
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
    </View>
  )
};
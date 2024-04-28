import { Text, View } from "react-native";
import { CustomText, DecorLine, DevelopedBy, Footer, Header, HeaderWrapper, ProfilePicture, SocialMedia } from "./styles";
import MangoLogo from "../../../assets/header/logo.svg"
import ByronLogo from "../../../assets/footer/logo-byron.svg"
import SearchField from "../../components/SearchField";
import React from "react";
import theme from "../../global/styles/theme";
import SocialIcon from "../../components/SocialIcon";

export default function Home() {
  return (
    <View>
      {/* Header */}
      <HeaderWrapper>
        <Header>
          <MangoLogo width={48} height={48} />
          <ProfilePicture>
            <Text>profile</Text>
          </ProfilePicture>
        </Header>

        <SearchField />
      </HeaderWrapper>
      <DecorLine color={theme.colors.secondary}/>

      {/* Footer */}
      <Footer>
        <CustomText color={theme.colors.primary} fontsize={16}>
          Entre em contato através das redes sociais:
        </CustomText>
        <SocialMedia>
          <SocialIcon iconName="mail" />
          <SocialIcon iconName="logo-whatsapp" />
          <SocialIcon iconName="logo-instagram" />
          <SocialIcon iconName="logo-facebook" />
        </SocialMedia>

        <DecorLine color={theme.colors.primary}/>

        <DevelopedBy>
          <CustomText fontsize={16}>
            Desenvolvidog por:
            ll
          </CustomText>
          <ByronLogo />
        </DevelopedBy>
      </Footer>
    </View>
  )
};
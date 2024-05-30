import { NavigationProp } from "@react-navigation/native";
import SimpleHeader from "../../components/SimpleHeader";
import SearchField from "../../components/SearchField";
import { ConfirmationBadge, ConfirmationIcon, ConfirmationInfo, ConfirmationText, ConfirmationTitle, MainWrapper } from "./styles";
import { ImageBackground, View } from "react-native";
import Button from "../../components/Button";
import theme from "../../global/styles/theme";

interface OrderConfirmationProps {
  navigation: NavigationProp<any>;
}

export default function OrderConfirmation({ navigation }: OrderConfirmationProps) {
  return (
    <ImageBackground source={require("../../../assets/background/bg-white.png")}>
      <View>
        <SimpleHeader
          title="Compra Finalizada"
          navigation={navigation}
        >
          <SearchField 
            navigation={navigation}
          />
        </SimpleHeader>

        <MainWrapper>

          <ImageBackground source={require("../../../assets/background/bg-gold.png")}>
            <ConfirmationBadge>
              <ConfirmationIcon source={require("../../../assets/confirmation/check.png")} />
              <ConfirmationText>
                <ConfirmationTitle>Compra Finalizada!</ConfirmationTitle>
                <ConfirmationInfo>Confira seu e-mail para mais informações</ConfirmationInfo>
              </ConfirmationText>
            </ConfirmationBadge>
          </ImageBackground>

          <Button 
            text="Voltar ao início"
            bgColor={theme.colors.secondary_light}
            borderColor={theme.colors.shape}
            navigation={navigation}
            screen="Home"

          />
        </MainWrapper>
      </View>
    </ImageBackground>

  )
};

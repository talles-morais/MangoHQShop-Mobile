import Button from "../../components/Button";
import FormField from "../../components/FormField";
import OAuthSection from "../../components/OAuthSection";
import { ConnectText } from "../../components/OAuthSection/styles";
import theme from "../../global/styles/theme";
import { DecorLine } from "../Home/styles";
import { ActionWrapper, Form, LoginContainer, ScrollWrapper, Wrapper } from "../Login/styles";
import { NavigationProp } from "@react-navigation/native";
import Logo from "../../../assets/login/big-logo.svg"
import BackgroundYellow from "../../../assets/background/bg-yellow.svg"
import { ImageBackground, ScrollView, View } from "react-native";

interface SignInProps {
  navigation: NavigationProp<any>; // This can vary depending on your setup
}


export default function SignUp({ navigation }: SignInProps) {
  return (
    <ImageBackground source={require("../../../assets/background/bg-yellow.png")}>
      <Wrapper>

        <Logo width={128} height={128} />

        <LoginContainer>
          <ImageBackground
            source={require("../../../assets/background/bg-white.png")}
          >
            <ScrollWrapper>

              <OAuthSection text="Cadastre-se!"/>
              <DecorLine color={theme.colors.shape} />

              <Form>

                <ConnectText marginTop="16">
                  Ou cadastre-se com um email:
                </ConnectText>

                <FormField label="Nome:" />
                <FormField label="E-mail:" />
                <FormField label="Telefone:" />
                <FormField label="Senha:" />
                <FormField label="Confirme a senha:" />

                <ActionWrapper>
                  <Button
                    text="Já tenho conta"
                    bgColor={theme.colors.background}
                    borderColor={theme.colors.secondary}
                    textColor={theme.colors.secondary}
                    screen="Login"
                    navigation={navigation}
                  />
                  <Button
                    text="Criar conta"
                    bgColor={theme.colors.secondary}
                    textColor={theme.colors.background}
                    screen="Home"
                    navigation={navigation}
                  />
                </ActionWrapper>
              </Form>
            </ScrollWrapper>
          </ImageBackground>
        </LoginContainer>
      </Wrapper>
    </ImageBackground>
  )
};

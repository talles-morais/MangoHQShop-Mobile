import Logo from "../../../assets/login/big-logo.svg"
import { ActionWrapper, Form, LoginContainer, ScrollWrapper, Wrapper } from "./styles"
import OAuthSection from "../../components/OAuthSection"
import { DecorLine } from "../Home/styles"
import theme from "../../global/styles/theme"
import Button from "../../components/Button"
import FormField from "../../components/InputForm"
import { ConnectText } from "../../components/OAuthSection/styles"
import { NavigationProp } from "@react-navigation/native"
import { ImageBackground } from "react-native"

interface LoginProps {
  navigation: NavigationProp<any>;
}

export default function Login({ navigation }: LoginProps) {
  return (
    <ImageBackground source={require("../../../assets/background/bg-yellow.png")}>

      <Wrapper>
        <Logo width={128} height={128} />

        <LoginContainer>
          <ImageBackground
            source={require("../../../assets/background/bg-white.png")}
          >
            <ScrollWrapper>

              <OAuthSection text="Faça Login!" />
              <DecorLine color={theme.colors.shape} />

              <Form >
                <ConnectText  marginTop="16">
                  Ou conecte-se com um email:
                </ConnectText>

                <FormField label="E-mail:" />
                <FormField secure label="Senha:" />

                <ActionWrapper>
                  <Button
                    text="Crie uma conta"
                    bgColor={theme.colors.background}
                    borderColor={theme.colors.secondary}
                    textColor={theme.colors.secondary}
                    screen="Signup"
                    navigation={navigation}
                  />
                  <Button
                    text="Entrar"
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
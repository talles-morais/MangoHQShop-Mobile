import Logo from "../../../assets/login/big-logo.svg"
import { ActionWrapper, Form, LoginContainer, Wrapper } from "./styles"
import OAuthSection from "../../components/OAuthSection"
import { DecorLine } from "../Home/styles"
import theme from "../../global/styles/theme"
import Button from "../../components/Button"
import FormField from "../../components/FormField"
import { ConnectText } from "../../components/OAuthSection/styles"
import { NavigationProp } from "@react-navigation/native"

interface LoginProps {
  navigation: NavigationProp<any>; // This can vary depending on your setup
}

export default function Login({ navigation } : LoginProps) {
  return (
    <Wrapper>
      <Logo width={80} height={80} />

      <LoginContainer>
        <OAuthSection />
        <DecorLine color={theme.colors.secondary} />

        <Form>
          <ConnectText>
            Ou conecte-se com um email:
          </ConnectText>

          <FormField label="E-mail:" />
          <FormField label="Senha:" />

          <ActionWrapper>
            <Button
              text="Cadastrar"
              bgColor={theme.colors.background}
              borderColor={theme.colors.secondary}
              textColor={theme.colors.secondary}
            />
            <Button
              text="Continuar"
              bgColor={theme.colors.secondary}
              textColor={theme.colors.background}
              screen="Home"
              navigation={navigation}
            />
          </ActionWrapper>
        </Form>
      </LoginContainer>
    </Wrapper>
  )
};
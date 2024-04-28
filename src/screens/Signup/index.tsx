import Button from "../../components/Button";
import FormField from "../../components/FormField";
import OAuthSection from "../../components/OAuthSection";
import { ConnectText } from "../../components/OAuthSection/styles";
import theme from "../../global/styles/theme";
import { DecorLine } from "../Home/styles";
import { ActionWrapper, Form, LoginContainer, Wrapper } from "../Login/styles";
import { NavigationProp } from "@react-navigation/native";
import Logo from "../../../assets/login/big-logo.svg"

interface SignInProps {
  navigation: NavigationProp<any>; // This can vary depending on your setup
}


export default function SignUp({ navigation }: SignInProps) {
  return (
    <Wrapper>
      <Logo width={80} height={80} />

      <LoginContainer>
        <OAuthSection />
        <DecorLine color={theme.colors.secondary} />

        <Form>
          <ConnectText>
            Ou cadastre-se com um email:
          </ConnectText>

          <FormField label="Nome:" />
          <FormField label="E-mail:" />
          <FormField label="Senha:" />
          <FormField label="Confirme a senha:" />

          <ActionWrapper>
            <Button
              text="Logar"
              bgColor={theme.colors.background}
              borderColor={theme.colors.secondary}
              textColor={theme.colors.secondary}
              screen="Login"
              navigation={navigation}
            />
            <Button
              text="Cadastrar"
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

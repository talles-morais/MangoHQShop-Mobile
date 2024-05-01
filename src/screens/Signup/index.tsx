import { ImageBackground } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../components/Button";
import OAuthSection from "../../components/OAuthSection";
import { ConnectText } from "../../components/OAuthSection/styles";
import InputForm from "../../components/InputForm";

import { DecorLine } from "../Home/styles";
import Logo from "../../../assets/login/big-logo.svg"
import { FormField } from "./styles";
import { Label } from "./styles";
import { ActionWrapper, Form, LoginContainer, ScrollWrapper, Wrapper } from "../Login/styles";
import theme from "../../global/styles/theme";

interface SignInProps {
  navigation: NavigationProp<any>; 
}

type Inputs = {
  name: string,
  email: string,
  phone: string,
  password: string,
  confirmPassword: string
}

export default function SignUp({ navigation }: SignInProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleRegister: SubmitHandler<Inputs> = (form) => {
    const data = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      confirmPassword: form.confirmPassword
    }

    console.log(data);
  }

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

                <FormField>
                  <Label>Nome Completo:</Label>
                  <InputForm 
                    name="name"
                    control={control}
                    placeholder="Digite seu nome completo"
                  />
                </FormField>
                <FormField>
                  <Label>E-mail:</Label>
                  <InputForm 
                    name="email"
                    control={control}
                    placeholder="exemplo@email.com"
                  />
                </FormField>
                <FormField>
                  <Label>Telefone:</Label>
                  <InputForm 
                    name="phone"
                    control={control}
                    placeholder="(00) 00000-0000"
                  />
                </FormField>
                <FormField>
                  <Label>Senha:</Label>
                  <InputForm 
                    name="password"
                    control={control}
                    placeholder="Crie uma senha forte!"
                    secureTextEntry={true}
                  />
                </FormField>
                <FormField>
                  <Label>Repita a senha:</Label>
                  <InputForm 
                    name="confirmPassword"
                    control={control}
                    placeholder="Repita a senha"
                    secureTextEntry={true}
                  />
                </FormField>

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
                    handle={handleSubmit(handleRegister)}
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

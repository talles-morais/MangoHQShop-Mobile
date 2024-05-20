import { ImageBackground, Keyboard, TouchableWithoutFeedback } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

import Logo from "../../../assets/login/big-logo.svg"
import { ActionWrapper, Form, LoginContainer, ScrollWrapper, Wrapper } from "./styles"
import OAuthSection from "../../components/OAuthSection"
import { DecorLine } from "../Home/styles"
import theme from "../../global/styles/theme"
import Button from "../../components/Button"
import { FormField, Label } from "../Signup/styles"
import { ConnectText } from "../../components/OAuthSection/styles"
import InputForm from "../../components/InputForm"

import api from "../../services/api"
import { useAuth } from "../../hooks/auth"

interface LoginProps {
  navigation: NavigationProp<any>;
}

type LoginInputs = {
  email: string,
  password: string,
}

const schema = Yup.object().shape({
  email: Yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Digite um email válido" })
    .required("E-mail é obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
})

export default function Login({ navigation }: LoginProps) {
  const user = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(schema)
  });

  const handleLogin: SubmitHandler<LoginInputs> = async (form) => {
    const data = {
      email: form.email,
      senha: form.password,
    } 

    const resp = await api.post("/usuarios/login", data);
    const logged = { ...resp.data.data, token: resp.data.token }
    
    user?.login(logged)
    
    if(resp.status == 200)
      navigation.navigate("Home")
  
  }


  return (
    <ImageBackground source={require("../../../assets/background/bg-yellow.png")}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                  <ConnectText marginTop="16">
                    Ou conecte-se com um email:
                  </ConnectText>

                  <FormField>
                    <Label>E-mail:</Label>
                    <InputForm
                      name="email"
                      control={control}
                      placeholder="exemplo@email.com"
                      autoCorrect={false}
                      keyboardType="email-address"
                      error={errors?.email?.message ?? ""}
                    />
                  </FormField>
                  <FormField>
                    <Label>Senha:</Label>
                    <InputForm
                      name="password"
                      control={control}
                      placeholder="Entre com sua senha!"
                      secureTextEntry={true}
                      error={errors?.password?.message ?? ""}
                    />
                  </FormField>


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
                      handle={handleSubmit(handleLogin)}
                    />
                  </ActionWrapper>
                </Form>
              </ScrollWrapper>
            </ImageBackground>
          </LoginContainer>
        </Wrapper>
      </TouchableWithoutFeedback>
    </ImageBackground>

  )
};
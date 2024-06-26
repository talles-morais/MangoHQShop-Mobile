import { Alert, ImageBackground, Keyboard, TouchableWithoutFeedback } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

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
import api from "../../services/api";
import { useState } from "react";
import PhoneInput from "../../components/PhoneInput";
import { useAuth } from "../../hooks/auth";

interface SignInProps {
  navigation: NavigationProp<any>;
}

type RegisterInputs = {
  name: string,
  email: string,
  phone: string,
  password: string,
  confirmPassword: string
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório!"),
  email: Yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Digite um email válido" })
    .required("E-mail é obrigatório!"),
  phone: Yup.string().required("Telefone é obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], "As senhas devem ser iguais").required("Confirmação de senha é obrigatória!")
})

export default function SignUp({ navigation }: SignInProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(schema)
  });
  const user = useAuth();

  const handleRegister: SubmitHandler<RegisterInputs> = async (form) => {
    const data = {
      nome: form.name,
      email: form.email,
      telefone: form.phone,
      role: false,
      senha: form.password,
      confirmPassword: form.confirmPassword,
      token: "",
    }
    const resp = await api.post("/usuarios/", data);

    const userData = {
      email: form.email,
      senha: form.password,
    } 

    const loginResponse = await api.post("/usuarios/login", userData);
    const logged = { ...loginResponse.data.data, token: loginResponse.data.token }
    
    user?.login(logged)
    

    if(resp.status == 201){
      Alert.alert("Usuario cadastrado com sucesso!");
      navigation.navigate("Home");
    }
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

                <OAuthSection text="Cadastre-se!" />
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
                      autoCapitalize="sentences"
                      autoCorrect={false}
                      error={errors?.name?.message ?? ""}
                    />
                  </FormField>
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
                    <Label>Telefone:</Label>
                    <PhoneInput
                      name="phone"
                      control={control}
                      placeholder="(00) 00000-0000"
                      keyboardType="phone-pad"
                      error={errors?.phone?.message ?? ""}
                    />
                  </FormField>
                  <FormField>
                    <Label>Senha:</Label>
                    <InputForm
                      name="password"
                      control={control}
                      placeholder="Crie uma senha forte!"
                      secureTextEntry={true}
                      error={errors?.password?.message ?? ""}
                    />
                  </FormField>
                  <FormField>
                    <Label>Repita a senha:</Label>
                    <InputForm
                      name="confirmPassword"
                      control={control}
                      placeholder="Repita a senha"
                      secureTextEntry={true}
                      error={errors?.confirmPassword?.message ?? ""}
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
      </TouchableWithoutFeedback>
    </ImageBackground>
  )
};

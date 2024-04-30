import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components/dist/types";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${RFValue(80)}px ${RFValue(24)}px;
  gap: ${RFValue(16)}px;
  height: 100%;
`

export const LoginContainer = styled.View<{ theme: DefaultTheme}>`
  width: 90%;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 32px;
  overflow: hidden;
`

export const ScrollWrapper = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 32
  }
}))``

export const Form = styled.View`
  gap: ${RFValue(12)}px;
  width: 100%;
`

export const ActionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`
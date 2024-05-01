import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components/dist/types";
import styled from "styled-components/native"; 


export const FormWrapper = styled.View`
  width: 100%;
`

export const Input = styled.TextInput`
  width: 100%;
  background-color: #FFF;
  border-radius: 8px;
  border: 2px solid ${({theme}) => theme.colors.shape};
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`
export const Error = styled.Text<{ theme: DefaultTheme }>`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(8)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native"; 

export const Label = styled.Text<{theme: DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.medium};
`

export const Input = styled.TextInput`
  width: 100%;
  background-color: #FFF;
  border-radius: 8px;
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`
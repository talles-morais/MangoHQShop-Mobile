import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const AuthWrapper = styled.View`
  width: 100%;
  gap: ${RFValue(16)}px;
`

export const ConnectText = styled.Text<{theme: DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.regular};
`
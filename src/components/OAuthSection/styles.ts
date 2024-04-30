import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const AuthWrapper = styled.View`
  width: 100%;
  align-items: center;
`

export const ConnectText = styled.Text<{theme: DefaultTheme, fontsize?: string, marginTop?: string}>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${(props) => props.fontsize || 12}px;
  text-align: center;
  margin-top: ${(props) => props.marginTop || 0}px;
`

export const SocialSection = styled.View`
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    margin: ${RFValue(16)}px 0;
`
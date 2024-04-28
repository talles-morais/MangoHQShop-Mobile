import { RFValue } from "react-native-responsive-fontsize"
import styled, { DefaultTheme } from "styled-components/native"

export const ButtonWrapper = styled.TouchableOpacity<{bgColor?: string, borderColor?: string}>`
  background-color: ${(props) => props.bgColor || "transparent"};
  border: 2px solid ${(props) => props.borderColor || props.bgColor};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
`
export const ButtonText = styled.Text<{theme: DefaultTheme, bgColor?: string, color?: string}>`
  color: ${(props) => props.color || "#000"};
  font-family: ${({theme}) => theme.fonts.regular};
` 
import styled, { DefaultTheme } from "styled-components/native";

export const FormField = styled.View`
  width: 100%;
`

export const Label = styled.Text<{theme: DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.medium};
`
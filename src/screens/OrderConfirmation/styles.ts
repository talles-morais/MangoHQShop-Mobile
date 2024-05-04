import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components/dist/types";
import styled from "styled-components/native";

export const ConfirmationBadge = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(8)}px ${RFValue(34)}px;
  border: 2px solid;
  border-radius: 4px;
`
export const ConfirmationText = styled.View`
  align-items: center;
`
export const ConfirmationTitle = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(16)}px;
  text-align: center;
`
export const ConfirmationInfo = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(12)}px;
  text-align: center;
`
export const ConfirmationIcon = styled.Image`

`
export const MainWrapper = styled.View`
  align-items: center;
  padding: ${RFValue(32)}px ${RFValue(76)}px;
  height: 100%;
  gap: ${RFValue(16)}px;

`
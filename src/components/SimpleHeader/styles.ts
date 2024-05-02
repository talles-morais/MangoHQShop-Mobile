import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons"
import { DefaultTheme } from "styled-components/dist/types";
import { RFValue } from "react-native-responsive-fontsize";

export const SimpleHeaderWrapper = styled.View<{theme : DefaultTheme}>`
  justify-content: flex-end;
  padding: ${RFValue(40)}px ${RFValue(16)}px ${RFValue(18.5)}px ${RFValue(16)}px;
`

export const Group = styled.View<{theme : DefaultTheme}>`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(8)}px;
`

export const GoTo = styled.TouchableOpacity`
  
`

export const BackTo = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.secondary};
`

export const Cart = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.secondary};
`

export const ScreenTitle = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`

export const ProfilePicture = styled.View<{theme : DefaultTheme}>`
  
`
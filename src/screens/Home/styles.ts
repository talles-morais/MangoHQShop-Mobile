import styled from "styled-components/native"; 
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

export const HeaderWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: flex-end;
  padding: ${RFValue(40)}px ${RFValue(16)}px ${RFValue(18.5)}px ${RFValue(16)}px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
`

export const ProfilePicture = styled.View`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px; 
  border-radius: 100px;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`

export const DecorLine = styled.View`
  height: ${RFValue(2)}px;
  background-color: ${theme.colors.secondary};
`
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components/dist/types";
import styled from "styled-components/native";
import { rgba } from "polished";

export const Wrapper = styled.View`
  border: 2px solid;
  border-radius: ${RFValue(4)}px;
  width: ${RFValue(328)}px;
  height: ${RFValue(160)}px;
`

export const Title = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.passero};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.secondary};
  text-align: center;
  padding: ${RFValue(8)}px 0 ${RFValue(10)}px 0;
`

export const Content = styled.View`
  width: 45%;
`

export const Highlight = styled.View<{theme: DefaultTheme}>`
  flex-direction: row;
  background-color: ${({theme}) => rgba(theme.colors.primary, 0.4)};
  border-radius: 0 ${RFValue(32)}px ${RFValue(32)}px 0;
  margin-left: ${RFValue(45)}px;
  width: 100%;
`

export const Book = styled.Image`
  max-height: ${RFValue(96)}px;
  max-width: ${RFValue(64)}px;
`

export const BookDescription = styled.View`
  justify-content: center;
  padding: 0 ${RFValue(6)}px;
`

export const BookTitle = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`

export const BookVolume = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`
export const BookAuthor = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(8)}px;
`


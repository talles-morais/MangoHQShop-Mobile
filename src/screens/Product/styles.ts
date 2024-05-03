import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components/dist/types";
import styled from "styled-components/native";

export const ProductMainWrapper= styled.View`
  align-items: center;
  padding: ${RFValue(32)}px ${RFValue(16)}px ${RFValue(13)}px;
  width: 100%;
`

export const ProductWrapper= styled.View`
  align-items: center;
  padding: 0 ${RFValue(84)}px ${RFValue(32)}px;
  width: 100%;
`
export const ProductTitle = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`
export const ProductAuthor = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`
export const ProductCover = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(240)}px;
  margin: ${RFValue(32)}px 0 ${RFValue(16)}px;
`
export const Stock = styled.Text<{theme : DefaultTheme}>`

`
export const ProductPrice = styled.Text<{theme : DefaultTheme}>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`

export const ProductDescriptionWrapper = styled.View`
  width: 100%;
  align-items: center;
  padding: ${RFValue(8)}px 0 ${RFValue(32)}px;
`

export const ProductDescription = styled.Text`
  text-align: center;
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin: ${RFValue(16)}px 0;
`

export const LearnMore = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
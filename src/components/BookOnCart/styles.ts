import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BookOnCartWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  border: 1px solid;
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(8)}px;
  align-items: center;
  justify-content: space-between;
`

export const BookInfo = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 50%;
`

export const BookInfoText = styled.View`
  margin-left: ${RFValue(12)}px;
`

export const BookCover = styled.Image`
  width: ${RFValue(72)}px;
  height: ${RFValue(72)}px;
`

export const BookOnCartAuthor = styled.Text`

`

export const SetQuantity = styled.View`
  flex-direction: row;
  padding: ${RFValue(4)}px;
  border: 2px solid;
  border-radius: ${RFValue(8)}px;
`

export const RemoveItem = styled.TouchableOpacity`

`

export const Quantity = styled.Text`
  height: ${RFValue(15)}px;
  width: ${RFValue(24)}px;
  text-align: center;
  border: 2px solid ${({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(4)}px;
  margin: 0 ${RFValue(4)}px;
`

export const AddItem = styled.TouchableOpacity`

`

export const Icon = styled.Image`
   width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
`
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export const CartMainWrapper = styled.View`
  padding: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(55)}px;
  gap: ${RFValue(32)}px;
`
export const MyCart = styled.View`
  align-items: center;
  gap: ${RFValue(8)}px;
`
export const CartTitle = styled.Text`

`

export const ShoppingActions = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: ${RFValue(16)}px;
  width: 100%;
`
export const BuyMoreButton = styled.TouchableOpacity`
  max-width: ${RFValue(160)}px;
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background};
  border: 2px solid;
  border-radius: ${RFValue(4)}px;
  gap: ${RFValue(8)}px;
  justify-content: center;
  margin-top: ${RFValue(8)}px;
  flex: 1;
`

export const BuyButton = styled.TouchableOpacity`
  max-width: ${RFValue(160)}px;
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.secondary_light};
  border: 2px solid;
  border-radius: ${RFValue(4)}px;
  gap: ${RFValue(8)}px;
  justify-content: center;
  margin-top: ${RFValue(8)}px;
  flex: 1;
`


export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(16)}px;

`

export const BuyText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
`
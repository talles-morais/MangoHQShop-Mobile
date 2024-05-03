import styled from "styled-components/native";
import {MaterialIcons} from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonWrapper = styled.TouchableOpacity`
  width: ${RFValue(173)}px;
  padding: ${RFValue(4)}px ${RFValue(13)}px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.secondary_light};
  border: 2px solid;
  border-radius: ${RFValue(4)}px;
  gap: ${RFValue(8)}px;
  justify-content: center;
  margin-top: ${RFValue(8)}px;
`

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(16)}px;

`

export const BuyText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
`
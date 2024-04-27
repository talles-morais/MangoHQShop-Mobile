import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons'
import theme from "../../global/styles/theme";

export const SearchBar = styled.View`
  width: 100%;
  background-color: ${theme.colors.background};
  flex-direction: row;
  border-radius: ${RFValue(8)}px;
  justify-content: space-between;
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  margin-top: ${RFValue(16)}px;
`

export const SearchInput = styled.TextInput`
  width: 89%;
`

export const SearchIcon = styled(Ionicons)`
  color: ${theme.colors.secondary};
  font-size: ${RFValue(24)}px;
  width: 10%;
`

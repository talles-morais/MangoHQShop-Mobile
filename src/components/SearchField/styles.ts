import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons'
import { DefaultTheme } from "styled-components/dist/types";

export const SearchBar = styled.TouchableOpacity<{theme : DefaultTheme}>`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: row;
  border: 2px solid;
  border-radius: ${RFValue(8)}px;
  justify-content: space-between;
  padding: ${RFValue(4)}px ${RFValue(8)}px;
  margin-top: ${RFValue(16)}px;
`

export const SearchInput = styled.TextInput`
  width: 89%;
`

export const SearchIcon = styled(Ionicons)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
  width: 10%;
`

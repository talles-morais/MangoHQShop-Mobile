import { Ionicons } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

export const Button = styled.TouchableOpacity`

`

export const Icon = styled(Ionicons)<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(20)}px;
`;
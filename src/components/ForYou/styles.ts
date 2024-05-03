import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components/dist/types";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`

export const ListWrapper = styled.View`
  width: 100%;
  align-items: center;
`

export const BookList = styled.View<{ theme: DefaultTheme }>`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`
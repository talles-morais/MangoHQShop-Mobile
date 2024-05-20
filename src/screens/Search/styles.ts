import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const SearchedContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    gap: RFValue(6),
    paddingVertical: RFValue(16)
  }
})``
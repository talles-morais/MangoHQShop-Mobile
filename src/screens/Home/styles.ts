import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components/dist/types";

export const HeaderWrapper = styled.View<{ theme: DefaultTheme }>`
  justify-content: flex-end;
  padding: ${RFValue(40)}px ${RFValue(16)}px ${RFValue(18.5)}px ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
`;

export const ProfilePicture = styled.View<{ theme: DefaultTheme }>`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  border-radius: 100px;
  border: 2px solid;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const DecorLine = styled.View<{ color: string }>`
  height: ${RFValue(2)}px;
  width: 100%;
  background-color: ${(props) => props.color || props.theme.colors.background};
`;

export const MainWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center"
  }
})`
  width: 100%;
`

export const Promo = styled.View<{ theme: DefaultTheme }>`
  width: 100%;
  background-color: ${({theme}) => theme.colors.secondary_light};
  align-items: center;
  padding: ${RFValue(16)}px 0;
`

export const PromoBooks = styled.View<{ theme: DefaultTheme }>`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`

export const ForYou = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px ${RFValue(16)}px;
`

export const ListWrapper = styled.View`
  width: 100%;
  align-items: center;
`

export const BookList = styled.FlatList`

`

export const Footer = styled.View<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.secondary_light};
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px ${RFValue(16)}px ${RFValue(24)}px;
`;

export const CustomText = styled.Text<{ color?: string; fontsize?: number }>`
  color: ${(props) => props.color || "#FFF"};
  font-size: ${(props) => props.fontsize || 12}px;

  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SocialMedia = styled.View`
  flex-direction: row;
  gap: ${RFValue(8)}px;
  margin: ${RFValue(8)}px 0 ${RFValue(24)}px;
`;

export const DevelopedBy = styled.View`
  align-items: center;
  margin: ${RFValue(16)}px 0 0;
`;

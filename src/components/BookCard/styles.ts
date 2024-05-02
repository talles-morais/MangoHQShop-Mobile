import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CardWrapper = styled.TouchableOpacity<{ promo?: boolean }>`
  border: ${(props) => (props.promo ? RFValue(1) + "px solid" : "none")};
  align-items: center;
  width: ${RFValue(98)}px;
`;

export const CoverWrapper = styled.View`
  padding: ${RFValue(8)}px ${RFValue(11)}px;
  align-items: center;
  width: 100%;
`;

export const Cover = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(96)}px;
`;

export const BookDesc =styled.View`
  justify-content: center;
  align-items: center;
  padding: ${RFValue(8)}px ${RFValue(2)}px;
  height: ${RFValue(100)}px;
`

export const BookTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  text-align: center;
`;

export const BookAuthor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(4)}px;
`;

export const OldPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.secondary};
  text-decoration: line-through;
  font-size: 8px;
`;

export const PromoPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.promo};
  font-size: 12px;

`;

export const NormalPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
`;

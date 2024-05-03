import { Image, ImageBackground } from "react-native";
import theme from "../../global/styles/theme";
import { CustomText } from "../../screens/Home/styles";
import {
  AddItem,
  BookCover,
  BookInfo,
  BookInfoText,
  BookOnCartAuthor,
  BookOnCartWrapper,
  Icon,
  Quantity,
  RemoveItem,
  SetQuantity
} from "./styles";

export default function BookOnCart() {
  return (
    <ImageBackground source={require("../../../assets/background/bg-white.png")}>
      <BookOnCartWrapper>
        <BookInfo>
          <BookCover source={require("../../../assets/home/highlight.png")} />
          <BookInfoText>
            <CustomText fontsize={12} color={theme.colors.shape}>Titulo</CustomText>
            <BookOnCartAuthor>Autor</BookOnCartAuthor>
          </BookInfoText>
        </BookInfo>

        <SetQuantity>
          <RemoveItem>
            <Icon source={require("../../../assets/cart/remove.png")} />
          </RemoveItem>

          <Quantity>
            1
          </Quantity>

          <AddItem>
            <Icon source={require("../../../assets/cart/add.png")} />
          </AddItem>
        </SetQuantity>
      </BookOnCartWrapper>
    </ImageBackground>
  )
};

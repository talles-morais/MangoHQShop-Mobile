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
import { useCart } from "../../hooks/cart";
import { useEffect, useState } from "react";

interface BookProps {
  data: {
    autor: string,
    capa: string,
    estoque: number,
    id: number,
    titulo: string,
    valor: number
    quantity?: number
  }
}

export default function BookOnCart({data} : BookProps) {
  const cartContext = useCart();
  const [quantity, setQuantity] = useState(data.quantity || 1)

  useEffect(() => {
    // Atualiza o contexto do carrinho para refletir a quantidade atual
    cartContext?.updateQuantity(data.id, quantity);
  }, [quantity]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      cartContext?.removeItem(data.id);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <ImageBackground source={require("../../../assets/background/bg-white.png")}>
      <BookOnCartWrapper>
        <BookInfo>
          <BookCover source={{uri : data.capa}} />
          <BookInfoText>
            <CustomText numberOfLines={1} ellipsizeMode="tail" fontsize={12} color={theme.colors.shape}>{data.titulo}</CustomText>
            <BookOnCartAuthor>{data.autor}</BookOnCartAuthor>
          </BookInfoText>
        </BookInfo>

        <SetQuantity>
          <RemoveItem 
            onPress={handleDecrease}
          >
            <Icon source={require("../../../assets/cart/remove.png")} />
          </RemoveItem>

          <Quantity>
            {quantity}
          </Quantity>

          <AddItem 
            onPress={handleIncrease}
          >
            <Icon source={require("../../../assets/cart/add.png")} />
          </AddItem>
        </SetQuantity>
      </BookOnCartWrapper>
    </ImageBackground>
  )
};

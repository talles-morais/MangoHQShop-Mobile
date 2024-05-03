import { useCart } from "../../hooks/cart";
import { ButtonWrapper, BuyText, Icon } from "./styles";

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

export default function AddToCartButton({ data } : BookProps) {
  const onCart = useCart();

  const handleAddToCart = () => {
    const book = {
      ...data,
      quantity: data.quantity ?? 1
    }

    onCart?.addItem(book)
    console.log(onCart);

  }

  return (
    <ButtonWrapper onPress={handleAddToCart}>
      <Icon name="add-shopping-cart"/>
      <BuyText>Adicionar ao carrinho</BuyText>
    </ButtonWrapper>
  )
};

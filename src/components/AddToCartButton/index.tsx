import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import api from "../../services/api";
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
  const user = useAuth();

  const handleAddToCart = async () => {
    const book = {
      ...data,
      quantity: data.quantity ?? 1
    }

    onCart?.addItem(book)
    // const resp = await api.put("/carrinho/adicionar/", {
    //   id: user?.userLogged.id,
    //   livro: [book]
    // }, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${user?.userLogged.token}`
    //   }
    // })
    // console.log(resp.status);
  }

  return (
    <ButtonWrapper onPress={handleAddToCart}>
      <Icon name="add-shopping-cart"/>
      <BuyText>Adicionar ao carrinho</BuyText>
    </ButtonWrapper>
  )
};

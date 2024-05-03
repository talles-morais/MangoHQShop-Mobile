import { createContext, ReactNode, useContext, useState } from "react";


interface CartProviderProps {
  children: ReactNode
}

interface BookProps {
  autor: string,
  capa: string,
  estoque: number,
  id: number,
  titulo: string,
  valor: number,
  quantity: number
}

interface CartContextData {
  cartItems: BookProps[];
  addItem: (item: BookProps) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<BookProps[]>([]);

  const addItem = (item : BookProps) => {
    const existingItem = (cartItems.find((cartItem) => cartItem.id === item.id))
    if(existingItem){
      existingItem.quantity += item.quantity;
      setCartItems([...cartItems])
    }else{
      item.quantity = 1;
      setCartItems([...cartItems, item])
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider 
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart(){
  const context = useContext(CartContext)

  return context;
}


export { CartProvider, useCart }

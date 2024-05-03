import { ImageBackground, Text, View } from "react-native";
import { BookAuthor, BookDesc, BookTitle, CardWrapper, Cover, CoverWrapper, NormalPrice, OldPrice, Price, PromoPrice } from "./styles";

interface BookProps {
  autor: string,
  capa: string,
  estoque: number,
  id: number,
  titulo: string,
  valor: number
}

interface BookCardProps {
  promo?: boolean,
  data: BookProps[],
  index: number,
}

export default function BookCard({ promo, data, index}: BookCardProps) {
  if (!data || index >= data.length) {
    return <Text>Invalid data or index out of bounds</Text>;
  }

  const selectedBook = data[index]

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <View>

      <ImageBackground source={require("../../../assets/background/bg-white.png")}>
        <CardWrapper promo >
          <CoverWrapper style={{ borderBottomWidth: 1 }}>
            <Cover source={{ uri: selectedBook.capa }} />
          </CoverWrapper>

          <BookDesc>

            <BookTitle>{truncateText(selectedBook.titulo, 30)}</BookTitle>
            <BookAuthor>{selectedBook.autor}</BookAuthor>
            {promo ?
              <Price>
                <OldPrice>
                  {`R$ ${selectedBook.valor + 5},00`}
                </OldPrice>
                <PromoPrice>
                  {`R$ ${selectedBook.valor},00`}
                </PromoPrice>
              </Price>
              :
              <Price>
                <NormalPrice>
                  {`R$ ${selectedBook.valor},00`}
                </NormalPrice>
              </Price>
            }
          </BookDesc>
        </CardWrapper>
      </ImageBackground>
    </View>
  )
};

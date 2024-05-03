import theme from "../../global/styles/theme"
import { CustomText } from "../../screens/Home/styles"
import BookCard from "../BookCard"
import { BookList, Container, ListWrapper } from "./styles"

interface BookProps {
  autor: string,
  capa: string,
  estoque: number,
  id: number,
  titulo: string,
  valor: number
}

interface ForYouProps {
  booklist: BookProps[],
  length: number,
  onPress: (book: BookProps) => void,
}

export default function ForYou({booklist, length, onPress} : ForYouProps) {
  const randomIndex = (tamanho: number) => {
    const list = new Set<number>();

    while (list.size < tamanho) {
      const numeroAleatorio = Math.floor(Math.random() * 36);
      list.add(numeroAleatorio);
    }
    return Array.from<number>(list);
  }

  return (
    <Container>
      <ListWrapper
        style={{
          borderTopWidth: 2
        }}
      >
        <CustomText style={{ marginBottom: 16, marginTop: 8 }} color={theme.colors.shape} fontsize={16}>
          Para Você!
        </CustomText>

        <BookList style={{
          flexWrap: "wrap",
          rowGap: 4
        }}>
          {booklist.slice(0, length).map((book, index) => {
            return (
              <BookCard
                onPress={() => onPress(book)}
                key={book.id}
                index={index}
                data={booklist}
              />
            )
          })}
        </BookList>

      </ListWrapper>
    </Container>
  )
};

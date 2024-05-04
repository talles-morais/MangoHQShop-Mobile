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

export default function ForYou({ booklist, length, onPress }: ForYouProps) {
  const randomIndex = () => {
    return Math.floor(Math.random() * 36);
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
          {booklist.slice(0, length).map((book) => {
            return (
              <BookCard
                onPress={() => onPress(book)}
                key={book.id}
                index={randomIndex()}
                data={booklist}
              />
            )
          })}
        </BookList>

      </ListWrapper>
    </Container>
  )
};

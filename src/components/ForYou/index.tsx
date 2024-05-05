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
  const randomIndex = (size: number) => {
    let list: number[] = []
    for (let i = 0; i < size; i++) {
      const randomNumber = Math.floor(Math.random() * 36)
      if (!list.includes(randomNumber)) {
        list.push(randomNumber);
      }else {
        i--;
      }
    }
    return list;
  }

  const randomList = randomIndex(length)

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
          {randomList.map((n) => {
            return (
              <BookCard
                onPress={() => onPress(booklist[n])}
                key={n}
                index={n}
                data={booklist}
              />
            )
          })}
        </BookList>

      </ListWrapper>
    </Container>
  )
};

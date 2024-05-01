import { Image, ImageBackground, View } from "react-native";
import {
  Book,
  BookDescription,
  BookTitle,
  BookVolume,
  BookAuthor,
  Content,
  Highlight,
  Title,
  Wrapper
} from "./styles";

interface CarouselItemProps {
  item?: {
    title: string,
    volume: string,
    author: string,
    imgUrl: string,
  }
  index: number
}

export default function CarouselItem({ item, index }: CarouselItemProps) {
  return (
    <View key={index}>
      <ImageBackground source={require("../../../assets/background/bg-carousel.png")}>
        <Wrapper>
          <Title>DESTAQUE DO MÊS!</Title>

          <Content>
            <Highlight>
              <Book source={require("../../../assets/home/highlight.png")} />
              <BookDescription>
                <BookTitle>One Piece</BookTitle>
                <BookVolume>Volume 100</BookVolume>
                <BookAuthor>Eiichiro Oda</BookAuthor>
              </BookDescription>
            </Highlight>
          </Content>
        </Wrapper>
      </ImageBackground>
    </View>
  )
};

import { ImageBackground, Text } from "react-native";
import { Header, ProfilePicture } from "../../screens/Home/styles";
import { SimpleHeaderWrapper, ScreenTitle, Cart, Group, GoTo } from "./styles"
import { BackTo } from "./styles";

export default function SimpleHeader() {
  return (
    <ImageBackground source={require("../../../assets/background/bg-yellow.png")}>
      <SimpleHeaderWrapper>
        <Header>
          <Group >
            <GoTo>
              <BackTo name="arrow-back-sharp" />
            </GoTo>
            <ScreenTitle>Produto</ScreenTitle>
          </Group>

          <Group>
            <GoTo>
              <Cart name="cart-outline" />
            </GoTo>
            <ProfilePicture>
              <Text>profile</Text>
            </ProfilePicture>
          </Group>
        </Header>
      </SimpleHeaderWrapper>
    </ImageBackground>
  )
};

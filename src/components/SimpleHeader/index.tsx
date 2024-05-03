import { ImageBackground, Text } from "react-native";
import { Header, ProfilePicture } from "../../screens/Home/styles";
import { SimpleHeaderWrapper, ScreenTitle, Group, GoTo, Icon } from "./styles"

export default function SimpleHeader() {
  return (
    <ImageBackground source={require("../../../assets/background/bg-yellow.png")}>
      <SimpleHeaderWrapper>
        <Header>
          <Group >
            <GoTo>
              <Icon source={require("../../../assets/product/back.png")} />
            </GoTo>
            <ScreenTitle>Produto</ScreenTitle>
          </Group>

          <Group>
            <GoTo>
              <Icon source={require("../../../assets/product/cart.png")} />
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

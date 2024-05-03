import { ImageBackground, Text } from "react-native";
import { Header, ProfilePicture } from "../../screens/Home/styles";
import { SimpleHeaderWrapper, ScreenTitle, Group, GoTo, Icon } from "./styles"
import { NavigationProp } from "@react-navigation/native";

interface HeaderProps {
  backTo: string,
  navigation: NavigationProp<any>;
}

export default function SimpleHeader({backTo, navigation} : HeaderProps) {
  return (
    <ImageBackground source={require("../../../assets/background/bg-yellow.png")}>
      <SimpleHeaderWrapper>
        <Header>
          <Group >
            <GoTo onPress={() => navigation.navigate(backTo)}>
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

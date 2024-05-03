import { ImageBackground, Text } from "react-native";
import { Header, ProfilePicture } from "../../screens/Home/styles";
import { SimpleHeaderWrapper, ScreenTitle, Group, GoTo, Icon } from "./styles"
import { NavigationProp } from "@react-navigation/native";

interface HeaderProps {
  title: string,
  cart?: boolean,
  backTo: string,
  navigation: NavigationProp<any>,
  children?: React.JSX.Element,
}

export default function SimpleHeader({ backTo, navigation, cart, title, children }: HeaderProps) {
  return (
    <ImageBackground source={require("../../../assets/background/bg-yellow.png")}>
      <SimpleHeaderWrapper>
        <Header>
          <Group >
            <GoTo onPress={() => navigation.navigate(backTo)}>
              <Icon source={require("../../../assets/product/back.png")} />
            </GoTo>
            <ScreenTitle>{title}</ScreenTitle>
          </Group>

          <Group>
            {!cart &&
              <GoTo>
                <Icon source={require("../../../assets/product/cart.png")} />
              </GoTo>
            }
            <ProfilePicture>
              <Text>profile</Text>
            </ProfilePicture>
          </Group>
        </Header>
        {children}
      </SimpleHeaderWrapper>
    </ImageBackground>
  )
};

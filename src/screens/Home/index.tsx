import { Text, View } from "react-native";
import { DecorLine, Header, HeaderWrapper, ProfilePicture } from "./styles";
import LogoSVG from "../../../assets/header/logo.svg"
import SearchField from "../../components/SearchField";

export default function Home() {
  return (
    <View>
      {/* Header */}
      <HeaderWrapper>
        <Header>
          <LogoSVG width={48} height={48} />
          <ProfilePicture>
            <Text>profile</Text>
          </ProfilePicture>
        </Header>
        
        <SearchField />
      </HeaderWrapper>
      <DecorLine />

      {/* Footer */}

    </View>
  )
};
import { Text, TextInput, View } from "react-native";
import { DecorLine, Header, HeaderWrapper, Logo, ProfilePicture, SearchBar, SearchIcon, SearchInput } from "./styles";
import LogoSVG from "../../../assets/header/logo.svg"

export default function Home() {
  return (
    <View>
      <HeaderWrapper>
        <Header>
          <LogoSVG width={48} height={48} />
          <ProfilePicture>
            <Text>profile</Text>
          </ProfilePicture>
        </Header>
        
        <SearchBar>
            <SearchInput/>
            <SearchIcon name="search-sharp"></SearchIcon>
        </SearchBar>
      </HeaderWrapper>
      <DecorLine />
    </View>
  )
};
import { NavigationProp } from "@react-navigation/native"
import { useEffect, useRef } from "react"
import { TextInput } from "react-native"

import { SearchBar, SearchIcon } from "./styles"
import theme from "../../global/styles/theme"

interface SearchProps {
  autofocus?: boolean
  navigation: NavigationProp<any>
  onChangeText?: (text: string) => void
}

export default function SearchField({ autofocus, navigation, onChangeText }: SearchProps) {
  const searchInputRef = useRef<TextInput>(null)

  useEffect(() => {
      if(autofocus){
        searchInputRef.current?.focus()
      }
    
  }, [])

  return (
    <SearchBar >
      <TextInput 
        onPress={() => navigation.navigate('Search')}
        ref={searchInputRef} 
        style={{
          width: "80%",
          fontFamily: theme.fonts.regular
        }}
        cursorColor={theme.colors.secondary}
        onChangeText={onChangeText}
      />
      <SearchIcon name="search-sharp"></SearchIcon>
    </SearchBar>
  )
};

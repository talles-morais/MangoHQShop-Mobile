import { NavigationProp, useNavigation } from "@react-navigation/native"
import { SearchBar, SearchInput, SearchIcon } from "./styles"
import { useEffect, useRef } from "react"
import { TextInput } from "react-native"

interface SearchProps {
  autofocus?: boolean
  navigation: NavigationProp<any>
}

export default function SearchField({ autofocus, navigation }: SearchProps) {
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
        style={{width: "80%"}}
      />
      <SearchIcon name="search-sharp"></SearchIcon>
    </SearchBar>
  )
};

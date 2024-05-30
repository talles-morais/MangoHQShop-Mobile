import { useEffect, useState } from "react";
import { NavigationProp } from "@react-navigation/native";

import SimpleHeader from "../../components/SimpleHeader";
import SearchField from "../../components/SearchField";
import { SearchedContent } from "./styles";
import api from "../../services/api";
import BookCard from "../../components/BookCard";

interface SearchProps {
  navigation: NavigationProp<any>;
}

interface BookProps {
  autor: string,
  capa: string,
  estoque: number,
  id: number,
  titulo: string,
  valor: number
}

interface BookResponse {
  data: BookProps[],
  msg: string
}

export default function Search({ navigation }: SearchProps) {
  const [BookList, setBookList] = useState<BookProps[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchBooks = async () => {
    const response = await api.get<BookResponse>("/livros/");
    const data = response.data.data
    setBookList(data);
  }
  useEffect(() => {
    fetchBooks();
  }, [])

  const handleClickProduct = (book: BookProps) => {
    navigation.navigate("Product", { produto: book })
  }
  return (
    <>
      <SimpleHeader
        title="Resultados busca"
        cart
        navigation={navigation}
      >
        <SearchField
          autofocus
          navigation={navigation}
          onChangeText={setSearchInput}
        />
      </SimpleHeader>
      <SearchedContent>
        {BookList
          .filter((book) => 
            book.titulo.toLocaleLowerCase().includes(searchInput.toLowerCase()) || 
            book.autor.toLocaleLowerCase().includes(searchInput.toLowerCase())
          ).map((book, index, data) => (
          <BookCard
            key={index}
            data={data}
            index={index}
            onPress={() => handleClickProduct(book)}
          />
        ))}
      </SearchedContent>

    </>
  )
};
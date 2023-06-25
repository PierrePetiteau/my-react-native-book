import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

interface Book {
  id: string;
  title: string;
  author: string;
}

interface GetBooksQueryData {
  books: Book[];
}

const GET_BOOKS_QUERY = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const DELETE_BOOK_MUTATION = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id)
  }
`;

export const BasicQuery = () => {
  const { loading, error, data, refetch } = useQuery<GetBooksQueryData>(GET_BOOKS_QUERY);
  const [addBook] = useMutation(ADD_BOOK_MUTATION, {
    update: (cache, { data }) => {
      // Update cache after adding a book
      const existingBooks = cache.readQuery<GetBooksQueryData>({ query: GET_BOOKS_QUERY });
      const newBook = data.addBook;

      if (existingBooks) {
        const updatedBooks = [...existingBooks.books, newBook];
        cache.writeQuery({
          query: GET_BOOKS_QUERY,
          data: { books: updatedBooks },
        });
      }
    },
  });

  const [deleteBook] = useMutation(DELETE_BOOK_MUTATION, {
    refetchQueries: [{ query: GET_BOOKS_QUERY }],
  });

  const handleAddBook = () => {
    addBook({
      variables: {
        title: "Book " + data?.books.length,
        author: "Author " + data?.books.length,
      },
    });
  };

  const handleDeleteLastBook = () => {
    const lastBook = data?.books[data.books.length - 1];
    if (lastBook) {
      deleteBook({
        variables: {
          id: lastBook.id,
        },
      });
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  return (
    <>
      <View style={styles.buttonsRow}>
        <Button title="Refresh" onPress={() => refetch()} />
        <Button title="Delete last book" onPress={handleDeleteLastBook} />
        <Button title="Add book" onPress={handleAddBook} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {data?.books.map(({ id, title, author }) => (
          <View key={id} style={styles.itemContainer}>
            <Text style={styles.title}>
              {title} - {author}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    paddingBottom: 40,
    justifyContent: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    paddingVertical: 4,
  },
});

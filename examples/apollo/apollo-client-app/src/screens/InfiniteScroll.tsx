import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

/* Improvments

Mock a real feed use case

- Pull to refresh
- Show last item in first

*/

type Book = {
  id: string;
  title: string;
  author: string;
};

type Books = {
  books: Book[];
  canFetchMore: boolean;
};

type FetchBooksResponse = {
  feed: Books;
};

const FEED_QUERY = gql`
  query Feed($offset: Int, $limit: Int) {
    feed(offset: $offset, limit: $limit) {
      books {
        id
        title
        author
      }
      canFetchMore
    }
  }
`;

const ADD_BOOKS_MUTATION = gql`
  mutation AddBooks($quantity: Int!) {
    addBooks(quantity: $quantity) {
      id
      title
      author
    }
  }
`;

export const InfiniteScroll = () => {
  const { loading, error, data, fetchMore, refetch } = useQuery(FEED_QUERY, {
    variables: { offset: 0, limit: 10 },
  });
  const [addBooks] = useMutation(ADD_BOOKS_MUTATION);

  const loadMore = () => {
    fetchMore({
      variables: { offset: data.feed.books.length, limit: 10 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
  };

  const addMoreBooks = async () => {
    await addBooks({
      variables: { quantity: 10 },
      update: (cache, { data: { addBooks } }) => {
        // Read the existing data from the cache
        const response = cache.readQuery<FetchBooksResponse>({ query: FEED_QUERY });

        if (!response) {
          return;
        }

        // Update the feed with the new item
        const updatedFeed = {
          ...response.feed,
          books: addBooks,
        };

        // Write the updated data back to the cache
        cache.writeQuery({
          query: FEED_QUERY,
          data: {
            feed: updatedFeed,
          },
        });
      },
    });
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  return (
    <>
      <View style={styles.buttonsRow}>
        <Button title="Refresh" onPress={() => refetch()} />
        <Button title="Add 10 books" onPress={() => addMoreBooks()} />
      </View>
      <FlatList
        data={data.feed.books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>
              {item.title} - {item.author}
            </Text>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
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
  subtitle: {
    fontSize: 20,
    paddingVertical: 4,
  },
  description: {
    fontSize: 16,
    paddingVertical: 4,
  },
});

// resolvers.js
const books = [
  { id: "0", title: "Book 0", author: "Author 0" },
  { id: "1", title: "Book 1", author: "Author 1" },
  { id: "2", title: "Book 2", author: "Author 2" },
  { id: "3", title: "Book 3", author: "Author 3" },
  { id: "4", title: "Book 4", author: "Author 4" },
  { id: "5", title: "Book 5", author: "Author 5" },
  { id: "6", title: "Book 6", author: "Author 6" },
  { id: "7", title: "Book 7", author: "Author 7" },
  { id: "8", title: "Book 8", author: "Author 8" },
  { id: "9", title: "Book 9", author: "Author 9" },
  { id: "10", title: "Book 10", author: "Author 10" },
  { id: "11", title: "Book 11", author: "Author 11" },
];

const resolvers = {
  Query: {
    books: () => books,
    feed: (_, { offset = 0, limit = 10 }) => {
      const end = offset + limit;
      const canFetchMore = end < books.length;

      return {
        books: books.slice(offset, end),
        canFetchMore,
      };
    },
  },
  Mutation: {
    addBook: (parent, args) => {
      const { title, author } = args;
      const newBook = {
        id: String(books.length),
        title: `${title} ${books.length}`,
        author: `${author} ${books.length}`,
      };
      books.push(newBook);
      return newBook;
    },
    addBooks: (parent, args) => {
      const { quantity } = args;
      const newBooks = Array.from({ length: quantity }).map((_, i) => ({
        id: String(books.length + i),
        title: `Book ${books.length + i}`,
        author: `Author ${books.length + i}`,
      }));
      books.push(...newBooks);
      return newBooks;
    },
    deleteBook: (parent, args) => {
      const { id } = args;
      const bookIndex = books.findIndex((book) => book.id === id);

      if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        return true;
      }

      return false;
    },
  },
};

module.exports = resolvers;

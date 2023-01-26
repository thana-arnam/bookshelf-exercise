import Book from "@/components/Book";

const BookList = ({ books, removeBook, bookCount }) => {
  return (
    <>
      <h2>COLLECTION ({bookCount})</h2>
      <ol>
        {books.map((book) => (
          <Book key={book.id} data={book} removeBook={removeBook} />
        ))}
      </ol>
    </>
  );
};

export default BookList;

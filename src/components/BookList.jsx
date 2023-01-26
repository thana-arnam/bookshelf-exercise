import Book from "@/components/tempBook";

const BookList = ({ books, removeBook }) => {
  return (
    <>
      <h2>COLLECTION</h2>
      <ul>
        {books.map((book) => (
          <Book key={book.id} data={book} removeBook={removeBook} />
        ))}
      </ul>
    </>
  );
};

export default BookList;

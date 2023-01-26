import Book from "@/components/Book";

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

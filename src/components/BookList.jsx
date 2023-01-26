import Book from "@/components/Book";

const BookList = ({ books }) => {
  return (
    <>
      <h2>COLLECTION</h2>
      <ul>
        {books.map((book) => (
          <Book key={book.id} data={book} />
        ))}
      </ul>
    </>
  );
};

export default BookList;

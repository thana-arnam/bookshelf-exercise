"use client";
import { useImmer } from "use-immer";
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";

const HomePage = () => {
  const [books, setBooks] = useImmer([
    { id: 1, title: "Clean Code", category: "Computer" },
  ]);
  const addBook = (book) => {
    setBooks((draft) => {
      draft.push(book);
    });
  };
  const removeBook = (id) => {
    const idx = books.findIndex((b) => b.id === id);
    setBooks((draft) => {
      draft.splice(idx, 1);
    });
  };
  return (
    <div>
      <AddBookForm addBook={addBook} />
      <hr />
      <BookList books={books} removeBook={removeBook} />
    </div>
  );
};

export default HomePage;

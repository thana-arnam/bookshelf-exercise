"use client";
import { useState } from "react";
import { useImmer } from "use-immer";
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";

const delay = (cb) => {
  const ms = Math.round(Math.random() * 2000);
  setTimeout(cb, ms);
};

const HomePage = () => {
  const [books, setBooks] = useImmer([
    { id: 1, title: "Clean Code", category: "Computer" },
  ]);
  const [bookCount, setBookCount] = useState(1);
  const addBook = (book) => {
    delay(() => {
      setBooks((draft) => {
        draft.push(book);
      });
      setBookCount(bookCount + 1);
    });
  };
  const removeBook = (id) => {
    delay(() => {
      const idx = books.findIndex((b) => b.id === id);
      setBooks((draft) => {
        draft.splice(idx, 1);
      });
      setBookCount(bookCount - 1);
    });
  };
  return (
    <div>
      <AddBookForm addBook={addBook} />
      <hr />
      <BookList books={books} removeBook={removeBook} bookCount={bookCount} />
    </div>
  );
};

export default HomePage;

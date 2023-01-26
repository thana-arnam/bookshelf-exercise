"use client";
import { useState } from "react";
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";

const HomePage = () => {
  const [books, setBooks] = useState([{ id: 1, title: "Clean Code" }]);
  const addBook = (book) => {
    setBooks([...books, book]);
  };
  return (
    <div>
      <AddBookForm addBook={addBook} />
      <hr />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;

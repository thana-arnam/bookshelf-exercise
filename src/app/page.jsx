"use client";
import { useState } from "react";
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";

const HomePage = () => {
  const [books, setBooks] = useState([{ title: "Clean Code 2" }]);
  return (
    <div>
      <AddBookForm />
      <hr />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;

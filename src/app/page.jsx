"use client";
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";
import React from "react";

const HomePage = () => {
  // const books = [{ title: "Clean Code" }];
  const [books, setBooks] = React.useState([{ title: "Clean Code" }]);

  return (
    <div>
      <AddBookForm />
      <hr />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;

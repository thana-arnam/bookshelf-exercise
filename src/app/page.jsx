import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";

const HomePage = () => {
  const books = [{ title: "Clean Code" }];
  return (
    <div>
      <AddBookForm />
      <hr />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;

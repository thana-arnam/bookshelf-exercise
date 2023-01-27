"use client";

import Book from "@/components/book";
import Badge from "../../components/Badge";
import AddBookModal from "../../components/AddBookModal";
import useModal from "../../hooks/useModal";
import { useEffect, useState } from "react";

const categories = [
    {
        name: "Computer",
        icon: "💻",
    },
    {
        name: "Novel",
        icon: "🧚‍♀️",
    },
];

const books = [
    {
        id: 1,
        title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
        desc: "Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.",
        coverImg:
            "https://m.media-amazon.com/images/I/61aFldsgAmL._SX646_BO1,204,203,200_.jpg",
        owner: "bazsup",
        category: "Computer",
        finished: false,
    },
    {
        id: 2,
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        desc: "Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.",
        coverImg:
            "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        owner: "thoritie",
        category: "Novel",
        finished: true,
    },
];

export default function Bookshelf() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const addNewBookModal = useModal();
    const [selectedCategory, setSelectedCategory] = useState("Computer");

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        setLoading(true);
        fetch(`/api/books?category=${selectedCategory}`)
            .then((res) => res.json())
            .then((json) => {
                setLoading(false);
                setBooks(json);
            });
    }, [selectedCategory]);
    return (
        <>
            <div className="badge-group">
                {categories.map((category) => (
                    <Badge
                        key={category.name}
                        active={category.name === selectedCategory}
                        onSelect={() => handleSelectCategory(category.name)}
                    >
                        {category.icon} {category.name}
                    </Badge>
                ))}
            </div>
            <div className="bookList">
                {loading
                    ? "Loading..."
                    : books.map((book) => {
                          return (
                              <Book
                                  key={book.id}
                                  title={book.title}
                                  coverImg={book.coverImg}
                                  finished={book.finished}
                                  addNewBook={addNewBookModal.open}
                              />
                          );
                      })}
            </div>
            <AddBookModal
                isShow={addNewBookModal.isShow}
                close={addNewBookModal.close}
            />
        </>
    );
}

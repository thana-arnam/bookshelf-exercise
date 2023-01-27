"use client";

import Book from "@/components/book";
import Badge from "../../components/Badge";
import AddBookModal from "../../components/AddBookModal";
import useModal from "../../hooks/useModal";
import { useState } from "react";

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

export default function Bookshelf() {
    const books = [
        {
            id: 1,
            title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
            desc: "Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.",
            owner: "bazsup",
            category: "Computer",
            finished: false,
        },
        {
            id: 2,
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            desc: "Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.",
            owner: "thoritie",
            category: "Novel",
            finished: true,
        },
    ];
    const addNewBookModal = useModal();
    const [selectedCategory, setSelectedCategory] = useState("Computer");

    return (
        <>
            <div className="badge-group">
                {categories.map((category) => (
                    <Badge
                        key={category.name}
                        active={category.name === selectedCategory}
                        onSelect={() => setSelectedCategory(category.name)}
                    >
                        {category.icon} {category.name}
                    </Badge>
                ))}
            </div>
            <div className="bookList">
                {books.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            title={book.title}
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

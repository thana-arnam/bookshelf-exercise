"use client";

import Book from "@/components/book";
import Modal from "../../components/Modal";
import useModal from "../../hooks/useModal";

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

    return (
        <>
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
            {addNewBookModal.isShow && (
                <Modal close={addNewBookModal.close}>content</Modal>
            )}
        </>
    );
}

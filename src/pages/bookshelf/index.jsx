"use client";

import Book from "@/components/book";
import AddBookModal from "../../components/AddBookModal";
import useModal from "../../hooks/useModal";

export default function Bookshelf() {
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
    const addNewBookModal = useModal();
    const refresh = () => {
        // Call API get bookshelf
    };

    return (
        <>
            <div className="addBook">
                <a className="addBtn" onClick={addNewBookModal.open}>
                    ADD MORE
                </a>
            </div>
            <div className="bookList">
                {books.map((book) => {
                    return (
                        <Book
                            key={book.id}
                            title={book.title}
                            coverImg={book.coverImg}
                            finished={book.finished}
                            description={book.desc}
                            category={book.category}
                        />
                    );
                })}
            </div>
            <AddBookModal
                isShow={addNewBookModal.isShow}
                close={addNewBookModal.close}
                refresh={refresh}
            />
        </>
    );
}

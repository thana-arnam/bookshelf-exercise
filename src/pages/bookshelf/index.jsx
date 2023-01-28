"use client";

import Book from "@/components/book";
import { useState, useEffect } from "react";
import api from "@/utils/api";
import AddBookModal from "../../components/AddBookModal";
import useModal from "../../hooks/useModal";

export default function Bookshelf() {
    const [books, setBooks] = useState([]);
    const getBooks = () => {
        api.get("/bookshelf/bazsup").then((res) => setBooks(res.data));
    };
    const addNewBookModal = useModal();
    const refresh = () => {
        // Call API get bookshelf
    };

    useEffect(() => {
        getBooks();
    }, []);
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

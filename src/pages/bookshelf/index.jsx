"use client";

import { useState, useEffect } from "react";
import Book from "@/components/book";
import { useQuery } from "react-query";
import api from "@/utils/api";
import AddBookModal from "../../components/AddBookModal";
import useModal from "../../hooks/useModal";

export default function Bookshelf() {
    const {
        isLoading,
        data: books,
        refetch,
    } = useQuery("books/bazsup", () =>
        api.get("/bookshelf/bazsup").then((res) => {
            return res.data;
        })
    );
    const addNewBookModal = useModal();
    return (
        <>
            <div className="addBook">
                <a className="addBtn" onClick={addNewBookModal.open}>
                    ADD MORE
                </a>
            </div>
            <div className="bookList">
                {isLoading ? (
                    <p>Loading Books...</p>
                ) : (
                    <BookList books={books} />
                )}
            </div>
            <AddBookModal
                isShow={addNewBookModal.isShow}
                close={addNewBookModal.close}
                refresh={refetch}
            />
        </>
    );
}

const BookList = ({ books }) => {
    return books.map((book) => {
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
    });
};

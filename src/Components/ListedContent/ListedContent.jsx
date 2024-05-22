import React, { useEffect, useState } from 'react';
import { getStoredBooks } from '../../utils/localStorage';
import ReadBookCard from '../ReadBookCard/ReadBookCard';
import { useLoaderData } from 'react-router-dom';


const ListedContent = () => {
    const [storedBooksRead, setStoredBooksRead] = useState([]);

    const books = useLoaderData()

    useEffect(() => {
        const storedReadBooks = getStoredBooks("wishListBooks");
        if (Array.isArray(books) && books.length > 0) {

            const booksRead = [];
            for (const id of storedReadBooks) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksRead.push(book);
                }
            }
            setStoredBooksRead(booksRead);
        }
    }, [books]);

    return (
        <div className="mt-6 space-y-5">
            {
                storedBooksRead.map(storedBook => <ReadBookCard key={storedBook.bookId} storedBook={storedBook}></ReadBookCard>)
            }
        </div>
    );
};

export default ListedContent;
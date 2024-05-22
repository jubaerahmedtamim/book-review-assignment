import { useEffect, useState } from "react";
import { getStoredBooks } from "../../utils/localStorage";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadBookContent = () => {
    const [storedBooksRead, setStoredBooksRead] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [books, setBooks] = useState([])

    useEffect(() => {
        const handleLoadData = async () => {
            const response = await fetch('books.json');
            const data = await response.json();
            setBooks(data);
        }
        handleLoadData();
    }, [])

    useEffect(() => {
        const storedReadBooks = getStoredBooks("readingListBooks");
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

        <div>
            <div className='text-center my-4'>
                <details className="dropdown">
                    <summary className="m-1 btn">Sort by </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>All</a></li>
                        <li><a>Rating</a></li>
                        <li><a>Number of page</a></li>
                        <li><a>Publishing year</a></li>
                    </ul>
                </details>
            </div>
            <div className="mt-6 space-y-5">
                {
                    storedBooksRead.map(storedBook => <ReadBookCard key={storedBook.bookId} storedBook={storedBook}></ReadBookCard>)
                }
            </div>
        </div>

    );
};

export default ReadBookContent;

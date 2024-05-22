import { useEffect, useState } from "react";
import { getStoredBooks } from "../../utils/localStorage";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadBookContent = () => {
    const [storedBooksRead, setStoredBooksRead] = useState([]);
    const [books, setBooks] = useState([])

    useEffect(()=>{
        const handleLoadData = async() => {
            const response = await fetch('books.json');
            const data = await response.json();
            setBooks(data);
        }
        handleLoadData();
    },[])

    useEffect(() => {
        const storedReadBooks = getStoredBooks("readingListBooks");
        if ( Array.isArray(books) && books.length > 0) { 

            const booksRead = [];
            for (const id of storedReadBooks) {
                const book = books.find(book => book.bookId === id);
                if(book){
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

export default ReadBookContent;

import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const handleLoadData = async() => {
            const response = await fetch('books.json');
            const data = await response.json();
            setBooks(data);
        }
        handleLoadData();
    },[])

    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-8'>Books</h1>
            <div  className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;
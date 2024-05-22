import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { getStoredBooks } from '../../utils/localStorage';


const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
);

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {

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
    console.log(storedBooksRead);
    return (
        <BarChart width={1200} height={300} data={storedBooksRead}>
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip content="" />
            <Bar dataKey="totalPage" fill="#8884d8"
                shape={<TriangleBar />} />
        </BarChart>
    );
};

export default PageToRead;
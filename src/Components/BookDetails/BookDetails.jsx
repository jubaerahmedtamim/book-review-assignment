import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Tag from '../Tag/Tag';
import toast from 'react-hot-toast';
import { saveBooks } from '../../utils/localStorage';



const BookDetails = () => {
    const [readingList, setReadingList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const books = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const book = books.find(book => book.bookId === intId);
    const { bookName, author, review, category, tags, totalPage, rating, publisher, yearOfPublishing } = book;

    const handleWishlistBooks = (book) => {
        if (readingList.find(read => read.id === book.id)) {
            toast.error("This book has already read.")
        }
        else if (wishList.find(wish => wish.id === book.id)) {
            toast.error("this book has already in wishlist.")
        }
        else {
            saveBooks(id, "wishListBooks")
            setWishList([...wishList, book]);
            toast.success(`${bookName} is add to wishlist.`)
        }
    }

    const handleReadListBooks = (book) => {
        if (readingList.find(read => read.id === book.id)) {
            toast.error("This book has already added to reading list.")
        }
        else {
            saveBooks(id, "readingListBooks")
            setReadingList([...readingList, book]);
            toast.success(`${bookName} is add to reading list.`)
        }

    }


    return (
        <div>
            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold mb-4">{bookName}</h1>
                        <p className='text-xl font-medium mb-6'>By: {author}</p>
                        <p className='text-xl font-medium border-y-2 py-4 mb-6'>{category}</p>
                        <p className='mb-7'> <span className="font-bold">Review:</span>  {review} </p>
                        <div className='flex items-center gap-3 border-b pb-6'>
                            <span className='font-bold'>Tags:</span>
                            {
                                tags && tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                            }
                        </div>
                        <div className='my-6 flex gap-20'>
                            <div className='text-[#131313B3] text-base font-normal'>
                                <p>Number of page:</p>
                                <p>Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p>Rating:</p>
                            </div>
                            <div className='text-base font-semibold'>
                                <p>{totalPage}</p>
                                <p>{publisher}</p>
                                <p>{yearOfPublishing}</p>
                                <p>{rating}</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <button onClick={() => handleReadListBooks(book)} className=' hover:bg-gray-200 rounded-lg border px-7 py-4 text-lg font-semibold'>Read</button>
                            <button onClick={() => handleWishlistBooks(book)} className=' bg-[#50B1C9] text-white hover:bg-cyan-600  rounded-lg border px-7 py-4 text-lg font-semibold'>Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDetails;
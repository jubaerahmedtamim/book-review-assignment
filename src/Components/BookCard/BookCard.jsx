import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';

const BookCard = ({ book }) => {
    const { bookId, bookName, author, image, category, tags, rating } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card w-96 bg-base-100 border border-[#13131326] rounded-2xl shadow-xl">
                <figure className="px-6 py-6">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-3'>
                        {
                            tags && tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                        }
                    </div>
                    <h2 className="card-title font-bold text-2xl ">{bookName}</h2>
                    <p className='text-base font-medium text-[#131313CC] border-b-2 border-dashed border-[#13131326] pb-5 '>By: {author}</p>

                    <div className="flex justify-between mt-5">
                        <p className='font-medium text-base text-[#13131CC]'>{category}</p>
                        <p className=' flex items-center gap-2 font-medium text-base text-[#13131CC]'> {rating} <FaRegStar className='text-orange-400' /></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
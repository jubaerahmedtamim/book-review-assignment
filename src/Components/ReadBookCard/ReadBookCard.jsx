import React from 'react';
import Tag from '../Tag/Tag';
import { CiLocationOn, CiUser } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ReadBookCard = ({ storedBook }) => {
    const { bookId, bookName, author, image, totalPage, rating, tags, publisher, yearOfPublishing, category } = storedBook;
    return (
        <div>
            <div className=" p-6 bg-base-200">
                <div className="flex flex-col gap-7 lg:flex-row">
                    <img src={image} className="max-w-60 rounded-lg shadow-2xl" alt="Book Cover" />
                    <div className='flex-grow'>
                        <h1 className="text-2xl font-bold">{bookName}</h1>
                        <p className="py-6">By: {author}</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3 pb-2'>
                                <span className='font-bold'>Tags:</span>
                                {
                                    tags && tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                                }
                            </div>
                            <div>
                                <p className='flex text-[#13131399] items-center gap-3'><CiLocationOn />  Year of publishing: {yearOfPublishing}</p>
                            </div>

                        </div>
                        <div className='flex justify-between border-b-2 pb-2 mb-2'>
                            <div>
                                <p className='flex text-[#13131399] items-center gap-3'> <CiUser /> publisher:{publisher}</p>
                            </div>
                            <div>
                                <p className='flex text-[#13131399] items-center gap-3'> <IoNewspaperOutline /> Pages:{totalPage}</p>
                            </div>
                        </div>
                        <div className='flex gap-2 my-5'>
                            <p className=' bg-[#328EFF26] text-[#328EFF] px-5 py-3 text-center font-normal rounded-3xl'>Category: {category}</p>
                            <p className=' bg-[#FFAC3326] text-[#FFAC33] px-5 py-3 text-center font-normal rounded-3xl'>Rating: {rating}</p>
                            <Link to ={`/book/${bookId}`} className=' bg-[#23BE0A] text-[#fff] px-5 py-3 text-center text-lg font-medium rounded-3xl'>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;
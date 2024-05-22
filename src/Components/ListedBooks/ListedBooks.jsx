import React, { useState } from 'react';

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='my-7'>
            <div className='flex items-center justify-center h-24 bg-[#1313130D] font-bold text-3xl text-[#131313]  rounded-lg'>
                <h1>Books</h1>
            </div>

            <div className='text-center my-4'>
                <details className="dropdown">
                    <summary className="m-1 btn">Sort by </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            {/* tabs */}
            <div role="tablist" className="grid justify-start tabs-lifted">
                <a onClick={()=> setTabIndex(0)} role="tab" className={`${tabIndex === 0 ? "tab tab-active": "tab"}`}>Read Books</a>
                <a onClick={()=> setTabIndex(1)} role="tab" className={`${tabIndex === 1 ? "tab tab-active": "tab"}`}>Wishlist Books</a>
            </div>
        </div>
    );
};

export default ListedBooks;
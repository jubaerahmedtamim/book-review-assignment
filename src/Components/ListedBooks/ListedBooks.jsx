import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    
    return (
        <div className='my-7'>
            <div className='flex items-center justify-center h-24 bg-[#1313130D] font-bold text-3xl text-[#131313]  rounded-lg'>
                <h1>Books</h1>
            </div>

            {/* tabs */}
            <div role="tablist" className="grid justify-start tabs-lifted">
                <Link to='' onClick={() => setTabIndex(0)} role="tab" className={`${tabIndex === 0 ? "tab tab-active" : "tab"}`}>Read Books</Link>
                <Link to='wish-list' onClick={() => setTabIndex(1)} role="tab" className={`${tabIndex === 1 ? "tab tab-active" : "tab"}`}>Wishlist Books</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;
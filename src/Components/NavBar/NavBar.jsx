import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const links = <>
        <li className='mr-2'><NavLink to="/">Home</NavLink></li>
        <li className='mr-2'><NavLink to="/listedBooks">Listed Books</NavLink></li>
        <li className='mr-2'><NavLink to="/pagesToRead">Pages to Read</NavLink></li>
    </>
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="hover:bg-gray-200 rounded-lg border px-6 py-3 text-lg font-semibold">Sign In</a>
                <a className=" bg-[#50B1C9] text-white hover:bg-cyan-600  rounded-lg border px-6 py-3 text-lg font-semibold ml-4">Sign Up</a>
            </div>
        </div>



    );
};

export default NavBar;
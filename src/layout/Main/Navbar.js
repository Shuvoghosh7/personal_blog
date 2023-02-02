import React from 'react';
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
const Navbar = () => {
    return (
        <nav className='h-14 rounded-sm bg-indigo-200    mx-auto lg:px-24'>
            <ul className='h-full mx-auto flex justify-around items-center gap-3 font-semibold text-indigo-900'>
                <h1>My Blogs</h1>
                <div className='flex justify-center items-center'>
                    <li className='mr-3'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='mr-3'>
                        <Link to='/about'>About Me</Link>
                    </li>
                    <li className='mr-3'>
                        <Link to='/contact'>Contact Me</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
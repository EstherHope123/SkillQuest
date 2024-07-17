import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    const toggleNav = () => {
        setNav(!nav);
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black text-1.5xl'>
            <h1 className='text-2xl font-bold text-[#020b3b]'>SkillQuest</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:underline'>
                    <Link smooth to="#home">Home</Link>
                </li>
                <li className='p-4 hover:underline'>
                    <Link smooth to="#about">About Us</Link>
                </li>
                <li className='p-4 hover:underline'>
                    <Link smooth to="#courses">Courses</Link>
                </li>
                <li className='p-4 hover:underline'>
                    <Link smooth to="#contact">Contacts</Link>
                </li>
            </ul>
            <button className="bg-blue-900 hidden lg:mr-10 text-white lg:py-3 lg:px-6 lg:rounded-md hover:bg-blue-700 lg:flex lg:items-center" onClick={handleLoginClick}>Login</button>
            <div onClick={toggleNav} className='block md:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div
                className={`fixed left-0 top-0 w-[60%] h-auto bg-[#555755] text-white border-r border-r-gray-900 ease-in-out duration-500 transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <h1 className='text-2xl font-bold text-[#020b3b] m-4'>SkillQuest</h1>
                <ul className='pt-24 uppercase p-4'>
                    <li onClick={toggleNav} className='p-4 hover:underline'>
                        <Link smooth to="#home" onClick={toggleNav}>Home</Link>
                    </li>
                    <li onClick={toggleNav} className='p-4 hover:underline'>
                        <Link smooth to="#about" onClick={toggleNav}>About Us</Link>
                    </li>
                    <li onClick={toggleNav} className='p-4 hover:underline'>
                        <Link smooth to="#courses" onClick={toggleNav}>Courses</Link>
                    </li>
                    <li onClick={toggleNav} className='p-4 hover:underline'>
                        <Link smooth to="#contact" onClick={toggleNav}>Contacts</Link>
                    </li>
                </ul>
                <button className="bg-blue-900 mr-10 text-white py-3 px-6 rounded-md hover:bg-blue-700 flex items-center" onClick={handleLoginClick}>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;

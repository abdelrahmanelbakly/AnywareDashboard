import React from 'react';
import 'tailwindcss/tailwind.css';
import {IoIosSearch } from 'react-icons/io';
import {BiSolidBell} from 'react-icons/bi';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {RxAvatar} from 'react-icons/rx'
const Header = () => {
  return (
    <div className="bg-gray-200 h-16 fixed top-0 right-0 w-5/6 flex flex-row justify-between items-center">
        <div className='pl-10 text-4xl w-1/2 font-bold text-gray-700'>Welcome User</div>
        <div className = "flex flex-row w-1/2 justify-around items-center">
            <div className='flex-row  h-full justify-between items-center'>
                <div className="relative w-full h-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex  flex-row items-center ">
                        <IoIosSearch className="w-6 h-6 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="bg-white w-full pl-10 pr-4 py-2 border rounded-3xl shadow focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Search"
                    />
                </div>
                
            </div>
            <div className='flex flex-row w-1/2 justify-around mr-auto ml-5 '>
                    <BiSolidBell className="w-10 h-10 text-blue-400"/>
                    <BsFillEnvelopeFill className="w-10 h-10  text-blue-400"/>
                    <RxAvatar className="w-10 h-10  text-blue-400" />
            </div>
        </div>  
    </div>
  );
};

export default Header;
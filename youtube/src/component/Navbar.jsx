import React from 'react'
import { FaMicrophone } from "react-icons/fa";
import { TfiPlus } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 '>
      <div className='flex items-center p-2 hover:cursor-pointer'>
        <div className='text-red-500'>
        <FaYoutube size={'40px'}  />
        </div>
        <h1>YouTube</h1>
      </div>
      <div className='flex items-center p-2 rounded-full shadow-md border-[1px] border-gray-400'>
        <input type="text" name="Search" id="search bra" />
        <button className='hover:cursor-pointer'>
        <IoSearch size={'20'} />
        </button>
      </div>
      <div className='flex items-center'>
       <div>
          <FaMicrophone size={'20px'} />
        </div>
        <div>
          <TfiPlus size={'20px'} />
        </div>
        <div>
          <IoIosNotificationsOutline size={'20px'} />
        </div>
        <div>
          <Avatar name="Pranav Kannur" size="40" round={true} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
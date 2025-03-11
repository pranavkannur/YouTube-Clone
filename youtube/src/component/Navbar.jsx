import React from 'react'
import { FaMicrophone } from "react-icons/fa";
import { TfiPlus } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import Avatar from 'react-avatar';


const Navbar = () => {
  return (
    <div className='flex ju items-center w-100'>
      <div>
        <button className='flex items-center hover:cursor-pointer rounded-s-full hover:bg-gray-300 m-0 p-0 '>
          <IoMenuOutline size={'30'} />
        </button>
      </div>
      <div className='flex justify-between items-center p-2 '>
        <div className='flex items-center p-2 hover:cursor-pointer pl-0 ml-0'>
          <div className='text-red-500'>
            <FaYoutube size={'40px'} />
          </div>
          <h1 className='text-xl'>YouTube</h1>
        </div>
        <div className='flex justify-items-end w-[35%] p-2 rounded-full shadow-md border-[1px] border-gray-400'>
          <input type="text" name="Search" id="search bra" className='w-[95%]' />
          <button className='hover:cursor-pointer border-l-[1px] border-gray-400'>
            <IoSearch size={'20'} className='m-1' />
          </button>
        </div>
        <div className='flex items-center gap-4'>
          <div>
            <button className='hover:cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 p-2'>
              <FaMicrophone size={'20px'} />
            </button>
          </div>
          <div>
            <button className='flex items-center hover:cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 p-2 gap-2'>
              <TfiPlus size={'20px'} /><p className='p-1'>Create</p>
            </button>
          </div>
          <div><button className='hover:cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 p-2'>
            <IoIosNotificationsOutline size={'20px'} />
          </button>
          </div>
          <div>
            <Avatar name="Pranav Kannur" size={"30"} round />

          </div>
        </div>
      </div>
    </div>
   
  )
}

      export default Navbar
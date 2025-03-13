import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { TfiDownload } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { MdOutlineFeedback } from "react-icons/md";
const SidebarItems = () => [
  {
    icon: <IoMdHome size={'24'} />,
    title: 'Home'
  },
  {
    icon: <SiYoutubeshorts size={'22'} />,
    title: 'Shorts'
  },
  {
    icon: <MdSubscriptions size={'22'} />,
    title: 'Subscriptions'
  },
  {
    icon: <SiYoutubemusic size={'22'} />,
    title: 'Music'
  }
]
 
const Sidebar = () => {
  return (
    <div>
      {
        SidebarItems().map((item, index) => (
          <div key={index} className='flex items-center gap-4 p-3 ml-5 mr-10 hover:bg-gray-200'>
            <div>{item.icon}</div>
            <h1>{item.title}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar
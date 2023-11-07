import React from 'react';
import 'tailwindcss/tailwind.css';
import Sidebarbutton from './sidebarbutton';
import { FaHome, FaGraduationCap } from 'react-icons/fa';
import {SlCalender} from 'react-icons/sl';
import {BiSolidBook} from 'react-icons/bi';
import {PiChartLineUpBold} from 'react-icons/pi'
import {BsMegaphoneFill} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-emerald-400 h-full w-1/6 fixed left-0 top-0 flex flex-col justify-between ">
      <div className='flex justify-center my-5 h-1/6'>
        <h1 className="font-extrabold text-transparent pb-5 text-4xl bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">Coligo</h1>
      </div>
      <div className="flex flex-col my-5 items-center h-5/6 overflow-scroll no-scrollbar">
        <Sidebarbutton title={"Dashboard"} Icon={FaHome} />
        <Sidebarbutton title={"Schedule"} Icon={SlCalender} />
        <Sidebarbutton title={"Courses"} Icon={BiSolidBook} />
        <Sidebarbutton title={"Gradebook"} Icon={FaGraduationCap} />
        <Sidebarbutton title={"Performance"} Icon={PiChartLineUpBold} />
        <Sidebarbutton title={"Announcement"} Icon={BsMegaphoneFill} />
      </div>
    </div>
  );
};

export default Sidebar;

import React, {useEffect} from 'react';
import 'tailwindcss/tailwind.css';
import Announcement from './announcement';
import { announcement, upcomming } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../index';
import TestButton from './testbutton';
import Upcomming from './upcomming'
const Container = () => {
  const announcements = useSelector((state:RootState)=>state.announcements)
  const upcommings = useSelector((state:RootState)=>state.upcomming)

  return (
    <div className=" bg-gray-200 fixed top-16 right-0 h-screen w-5/6">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full">
        <div className="col-span-4 row-span-1 m-2 ">
          <div className="bg-white p-4 h-full rounded-md text-black flex flex-col items-start">
            <h1 className='text-4xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400'>Exams time</h1>
            <p className='text-gray-400'>Never walk away from failure. On the contrary, study it carefully and imaginatively for its hidden assets.</p>
          </div>
        </div>
        <div className="col-span-3 row-span-2 mb-20 m-2 rounded-md">
          <div className="bg-white  h-full p-4 text-white rounded-md flex flex-col justify-start items-center">
            <div  className='h-1/6 w-full text-start text-gray-700'>
                <h1 className=' text-4xl'>Announcements</h1>
            </div>
            <div className='h-5/6 w-full flex flex-col justify-start items-center overflow-y-scroll no-scrollbar text-gray-700'>
                {announcements.map((a:announcement)=>(
                        <Announcement announcement={a}/>
                ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2 mb-20 m-2">
        <div className='flex flex-col w-full h-full bg-white rounded-md p-4'>
            <h4 className='text-4xl'>What's due</h4>
            <div className='overflow-y-scroll no-scrollbar'>
                {upcommings.map((u:upcomming)=>(
                    <Upcomming upcomming={u}/>
                ))}
            </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
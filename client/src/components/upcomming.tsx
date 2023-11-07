import react, { Fragment } from 'react';
import { upcomming } from '../types';
import { BiSolidHourglass } from 'react-icons/bi';

interface upcommingProps{
    upcomming:upcomming
}
const Upcomming : React.FC<upcommingProps> = ({upcomming}) =>{
    const formatDate = (date:Date)=>{
        date = new Date(date);
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
      
        const formattedDate = `${dayOfWeek} ${dayOfMonth}, ${hours}:${minutes}`;
        return formattedDate;
      }
    return(
        <div className= "border rounded-md my-2 p-2 overflow-scroll no-scrollbar" >
             <div className='flex flex-row'>
                <div><BiSolidHourglass className="w-7 h-7 text-blue-400" /></div>
                <h4 className='text-xl capitalize'>{upcomming.Type}</h4>
            </div>
            <div className='grid grid-cols-4 grid-rows-3 text-slate-500 mx-2 '>
                <div className=' col-span-1 row-span-1'>Course</div>
                <div className=' col-span-3 row-span-1 ml-2'>{upcomming.Subject}</div>
                <div className=' col-span-1 row-span-1'>Topic</div>
                <div className=' col-span-3 row-span-1 ml-2'>{upcomming.Topic}</div>
                <div className=' col-span-1 row-span-1 '>Due On</div>
                <div className=' col-span-3 row-span-1 ml-2'>{formatDate(upcomming.DueOn)}</div>
            </div>
            <button className='rounded-md  w-full border-teal-300 border-2'>Go to {upcomming.Type}</button>
        </div>
    );
}

export default Upcomming
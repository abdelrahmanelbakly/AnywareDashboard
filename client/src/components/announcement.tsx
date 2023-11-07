import React from "react";
import 'tailwindcss/tailwind.css';
import {RxAvatar} from 'react-icons/rx'
import { announcement } from "../types";
interface announcementprops{
    announcement: announcement;
}

const Announcement: React.FC<announcementprops> = ({announcement})=> {
    return(
        <div className="grid grid-cols-10 w-full my-2">
            <div className="col-span-3 flex flex-row">
                <div className="pl-5 w-4/12 mx-2">
                    <RxAvatar className="w-10 h-10 mt-1 text-blue-400" />
                </div>
                <div className=" w-8/12 mx-2 text-start">
                    <h3>{announcement.announcer}</h3>
                    <p>{announcement.subject}</p>
                </div>
            </div>    
            <div className="col-span-7 mx-2">
                <p>{announcement.message}</p>
            </div>
        </div>
    );
}
export default Announcement;
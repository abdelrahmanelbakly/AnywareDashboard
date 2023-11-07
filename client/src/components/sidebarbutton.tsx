import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { IconContext } from 'react-icons';
import { IconType } from 'react-icons';


interface SidebarbuttonProps {
  title: string;
  Icon: IconType;
}

const SidebarButton: React.FC<SidebarbuttonProps> = ({ title, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=' bg-transparent h-1/6 my-5 flex flex-row justify-between w-3/4 px-5 items-center rounded-md hover:bg-white transition duration-300'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconContext.Provider value={{ color: isHovered ? 'black' : 'white' }}>
        <Icon />
        <div className={`${ isHovered ? 'text-black' : 'text-white' } ml-3`}>{title}</div>
      </IconContext.Provider>
    </div>
  );
};

export default SidebarButton;

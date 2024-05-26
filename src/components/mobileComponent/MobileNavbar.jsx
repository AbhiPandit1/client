import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const MobileNavBar = () => {
  const navLinks = [
    {
      id: '1',
      name: 'Home',
      links: 'home',
    },
    {
      id: '2',
      name: 'About',
      links: 'about',
    },
    {
      id: '3',
      name: 'Projects',
      links: 'projects',
    },
    {
      id: '4',
      name: 'Contact',
      links: 'contact',
    },
    {
      id: '5',
      name: 'Skills',
      links: 'skills',
    },
    {
      id: '6',
      name: 'Experience',
      links: 'experience',
    },
  ];
  const { textColor, bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`text-${textColor} flex flex-col justify-center items-center  bg-${bgColor} h-[85vh] w-full`}
    >
      {navLinks.map((link) => (
        <div key={link.id} className="py-5 hover:text-orange-500">
          <a href={link.links}>
            <h1 className="text-[1.8rem] font-extrabold">{link.name}</h1>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MobileNavBar;

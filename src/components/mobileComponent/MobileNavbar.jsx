import React from 'react';

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
  ];

  return (
    <div className="text-white flex flex-col justify-center items-center  bg-black h-[85vh] w-full">
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

import React from 'react';

const NavLinks = () => {
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

  return (
    <div className=" flex justify-center items-center ">
      {navLinks.map((link) => (
        <div key={link.id} className="px-4 hover:text-orange-500">
          <a href={link.links}>
            <h1 className="text-[1.4rem]">{link.name}</h1>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;

import React, { useState } from 'react';
import Logo from './Logo';
import Theme from './Theme';
import NavLinks from './NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import MobileNavBar from '../../mobileComponent/MobileNavbar';

const Header = () => {
  const [open, setOpen] = useState(true);

  const setOpenTrue = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex items-center justify-between w-full h-[15vh] bg-black  border-b border-orange-500">
        <div className="flex items-center p-5  text-[1.4rem] ">
          <Logo />
        </div>
        <div className=" flex items-center justify-center">
          <div className="hidden sm:flex items-center justify-center px-20">
            <NavLinks />
          </div>
          <div>
            <Theme />
          </div>

          <div className="flex justify-between sm:hidden">
            <div
              className="flex  justify-center items-center px-4  "
              onClick={setOpenTrue}
            >
              {open === true ? (
                <GiHamburgerMenu color="white" size={30} />
              ) : (
                <ImCross color="white" size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">{open === true ? <MobileNavBar /> : null}</div>
    </>
  );
};

export default Header;

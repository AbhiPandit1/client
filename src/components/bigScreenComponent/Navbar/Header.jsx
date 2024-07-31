import React, { useContext, useState } from 'react';
import Logo from './Logo';
import Theme from './Theme';
import NavLinks from './NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import MobileNavBar from '../../mobileComponent/MobileNavbar';
import { ThemeContext } from '../../../context/ThemeContext';

const Header = () => {
  const { textColor } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const setOpenTrue = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex items-center justify-between w-full h-[15vh] max-w-[100vw]  border-b border-orange-500">
        <div className="flex items-center text-[1.4rem] pl-2 ">
          <Logo />
        </div>
        <div className=" flex items-center justify-center">
          <div className="hidden sm:flex items-center justify-center ">
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
              {open !== true ? (
                <GiHamburgerMenu color={textColor} size={30} />
              ) : (
                <ImCross color={textColor} size={30} />
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

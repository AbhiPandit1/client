import React, { useContext } from 'react';
import { GrSun } from 'react-icons/gr';
import { TbMoonFilled } from 'react-icons/tb';
import { ThemeContext } from '../../../context/ThemeContext';

const Theme = () => {
  const { style, handleTheme, textColor, bgColor } = useContext(ThemeContext);

  return (
    <div className="w-full h-full p-10">
      <div
        className={`h-9  w-24 p-1 bg-${textColor}  rounded-lg flex justify-between relative transition-all delay-300 duration-100`}
      >
        <div>
          <GrSun size={25} color={bgColor} />
        </div>
        <div>
          <TbMoonFilled size={25} color={bgColor} />
        </div>

        <div
          className={`h-7 w-7 rounded-full bg-${bgColor} absolute ${style} hover:bg-orange-400`}
          onClick={handleTheme}
        ></div>
      </div>
    </div>
  );
};

export default Theme;

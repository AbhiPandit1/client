import React, { useContext } from 'react';
import { GrSun } from 'react-icons/gr';
import { TbMoonFilled } from 'react-icons/tb';
import { ThemeContext } from '../../../context/ThemeContext';

const Theme = () => {
  const { textColor, style, handleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full p-10">
      <div
        className={`h-9 w-24 p-1 ${
          textColor === 'white' ? 'bg-black' : 'bg-orange-500'
        } rounded-lg flex justify-between relative transition-all delay-300 duration-100`}
      >
        <div>
          <GrSun size={25} color={textColor === 'white' ? 'white' : 'black'} />
        </div>
        <div>
          <TbMoonFilled
            size={25}
            color={textColor === 'white' ? 'white' : 'black'}
          />
        </div>

        <div
          className={`h-7 w-7 rounded-full ${
            textColor === 'white' ? 'bg-white' : 'bg-black'
          }  absolute ${style} hover:bg-orange-400`}
          onClick={handleTheme}
        ></div>
      </div>
    </div>
  );
};

export default Theme;

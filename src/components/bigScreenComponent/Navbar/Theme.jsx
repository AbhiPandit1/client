import React, { useState } from 'react';
import { GrSun } from 'react-icons/gr';
import { TbMoonFilled } from 'react-icons/tb';

const Theme = () => {
  const [style, setStyle] = useState('left-1');

  const handleTheme = () => {
    if (style === 'right-1') {
      setStyle('left-1');
    } else {
      setStyle('right-1');
    }
  };

  return (
    <div className="w-full h-full p-10">
      <div className="h-9  w-24 p-1 bg-white  rounded-lg flex justify-between relative transition-all delay-300 duration-100">
        <div>
          <GrSun size={25} />
        </div>
        <div>
          <TbMoonFilled size={25} />
        </div>

        <div
          className={`h-7 w-7 rounded-full bg-slate-950 absolute ${style} hover:bg-orange-400`}
          onClick={handleTheme}
        ></div>
      </div>
    </div>
  );
};

export default Theme;

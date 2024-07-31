import React from 'react';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoPython } from 'react-icons/io';
import { FaNodeJs } from 'react-icons/fa';
import { BsCSquareFill } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { FaNginx } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

const Skill = () => {
  const skills = [
    {
      id: '1',
      image: <FaReact size={80} color="orange" />,
      label: 'React',
      type: 'Frontend',
    },
    {
      id: '2',
      image: <RiNextjsFill size={80} color="orange" />,
      label: 'NextJs',
      type: 'Frontend',
    },
    {
      id: '3',
      image: <IoLogoJavascript size={80} color="orange" />,
      label: 'JScript',
      type: 'Frontend',
    },
    {
      id: '4',
      image: <RiTailwindCssFill size={80} color="orange" />,
      label: 'Tailwind',
      type: 'Frontend',
    },
    {
      id: '5',
      image: <FaHtml5 size={80} color="orange" />,
      label: 'Html',
      type: 'Frontend',
    },
    {
      id: '6',
      image: <IoLogoCss3 size={80} color="orange" />,
      label: 'CSS',
      type: 'Frontend',
    },
    {
      id: '7',
      image: <IoLogoPython size={80} color="orange" />,
      label: 'Python',
      type: 'Backend',
    },
    {
      id: '8',
      image: <FaNodeJs size={80} color="orange" />,
      label: 'NodeJs',
      type: 'Backend',
    },
    {
      id: '9',
      image: <BsCSquareFill size={80} color="orange" />,
      label: 'C#',
      type: 'Backend',
    },
    {
      id: '10',
      image: <FaAws size={80} color="orange" />,
      label: 'AWS',
      type: 'DevOps',
    },
    {
      id: '11',
      image: <FaDocker size={80} color="orange" />,
      label: 'Docker',
      type: 'DevOps',
    },

    {
      id: '13',
      image: <SiKubernetes size={80} color="orange" />,
      label: 'Kubernetes',
      type: 'DevOps',
    },
  ];

  return (
    <div className="text-left pt-10 h-full sm:mt-0">
      <h1 className="text-[2.8rem] sm:text-[3.8rem] font-bold relative">
        <span className="text-[3rem] sm:text-[4.2rem] text-orange-500">S</span>
        KILLS
        <div className="absolute bottom-0 left-0 pl-10 w-[120%] sm:w-[50%] h-1 bg-orange-500 transform -translate-x-[50%]"></div>
      </h1>

      <div className="flex flex-col h-full gap-10 p-4 sm:p-8">
        {/* Frontend Part */}
        <div className="grid grid-cols-1  sm:flex sm:gap-20">
          <div>
            <h1 className="text-[2.4rem] sm:text-[2.8rem] font-bold">
              <span className="text-[3rem] sm:text-[4.2rem] text-orange-500">
                F
              </span>
              RONT{' '}
              <span className="text-[3rem] sm:text-[4.2rem] text-orange-500">
                E
              </span>
              ND
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-10 w-full  sm:grid-cols-3 sm:gap-12 pt-8">
            {skills
              .filter((skill) => skill.type === 'Frontend')
              .map((front) => (
                <div key={front.id} className="flex items-center">
                  {front.image}
                  <span className="ml-2 text-2xl sm:text-3xl">
                    {front.label}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Backend Part */}
        <div className="grid grid-cols-1 sm:flex sm:gap-20">
          <div>
            <h1 className="text-[2.4rem] sm:text-[2.8rem] font-bold">
              <span className="text-[3rem] sm:text-[4.2rem] text-orange-500">
                B
              </span>
              ACK{' '}
              <span className="text-[3rem] sm:text-[4.2rem] text-orange-500">
                E
              </span>
              ND
            </h1>
          </div>
          <div className="grid grid-cols-2 w-full gap-10 sm:grid-cols-3 sm:gap-12 pt-8">
            {skills
              .filter((skill) => skill.type === 'Backend')
              .map((back) => (
                <div key={back.id} className="flex items-center">
                  {back.image}
                  <span className="ml-2 text-2xl sm:text-3xl">
                    {back.label}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* DevOps Part */}
        <div className="grid grid-cols-1 sm:flex sm:gap-20">
          <div>
            <h1 className="text-[2.4rem] sm:text-[2.8rem] font-bold">
              <span className="text-[3rem] sm:text-[4.2rem] text-orange-500">
                D
              </span>
              EVOPS
            </h1>
          </div>
          <div className="grid grid-cols-2 w-full gap-10 sm:grid-cols-3 sm:gap-12 pt-8">
            {skills
              .filter((skill) => skill.type === 'DevOps')
              .map((devops) => (
                <div key={devops.id} className="flex items-center">
                  {devops.image}
                  <span className="ml-2 text-2xl sm:text-3xl">
                    {devops.label}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

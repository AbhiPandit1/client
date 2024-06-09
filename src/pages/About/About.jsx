import React, { useState, useEffect, useMemo } from 'react';
import photo from '../../assets/HomePage.jpeg';

const About = () => {
  const skills = useMemo(
    () => [
      'Full Stack Developer',
      'Competitive Programmer',
      'Front End Expert',
      'UI/UX Designer',
    ],
    []
  );

  const [displayedSkill, setDisplayedSkill] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const displayNextWord = () => {
      if (wordIndex < skills[currentIndex].length) {
        setDisplayedSkill(skills[currentIndex].slice(0, wordIndex + 1));
        setWordIndex(wordIndex + 1);
      } else {
        setTimeout(() => {
          setWordIndex(0);
          setCurrentIndex((currentIndex + 1) % skills.length);
        }, 500); // Pause before displaying the next skill
      }
    };

    const timer = setTimeout(displayNextWord, 200);

    return () => clearTimeout(timer);
  }, [wordIndex, currentIndex, skills]);

  return (
    <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 justify-center  h-[100%] w-full   leading-none ">
      <div className="order-last">
        <div className="flex justify-center m-auto sm:flex sm:justify-start pt-20  leading-none ">
          <h1 className=" font-bold text-[3.2rem]  text-center hover:text-orange-500 font-roboto ">
            <span className="text-[6.2rem] text-orange-500">A</span>bout
          </h1>
        </div>
        <div>
          <h3 className="text-[2.9rem] text-left pl-20">{displayedSkill}</h3>
        </div>
        <div className="max-w-screen-lg p-10 m-auto">
          <p className="text-[1.1rem] tracking-wide leading-relaxed font-roboto">
            As a passionate{' '}
            <span className="text-[1.3rem] font-bold text-orange-500">
              Full Stack MERN
            </span>{' '}
            (MongoDB, Express.js, React, Node.js) Developer with a Master’s in
            Computer Science from{' '}
            <span className="text-[1.3rem] font-bold text-orange-500">
              Birmingham City University
            </span>
            , I bring a strong academic background and practical expertise. I’ve
            solved over{' '}
            <span className="text-[1.3rem] font-bold text-orange-500">500</span>{' '}
            LeetCode problems, enhancing my problem-solving abilities. My
            portfolio includes{' '}
            <span className="text-[1.3rem] font-bold text-orange-500">15+</span>{' '}
            live projects, showcasing my skills in building robust web
            applications. Specializing in{' '}
            <span className="text-[1.3rem] font-bold text-orange-500">
              React
            </span>{' '}
            and{' '}
            <span className="text-[1.3rem] font-bold text-orange-500">
              Next.js
            </span>
            , I create dynamic, user-friendly interfaces. Additionally, I’m
            proficient in{' '}
            <span className="text-[1.3rem] font-bold text-orange-500">C#</span>,
            enabling me to tackle various back-end tasks. Committed to
            continuous learning and collaboration, I strive to craft seamless
            digital experiences that integrate smoothly into users' lives.
          </p>
        </div>
        <div className="flex pl-20 pb-20 gap-3 items-center sm:pl-40 sm:gap-12 ">
          <button className="font-bold bg-orange-500 px-10 py-5 rounded-xl hover: hover:bg-slate-300 ">
            <a
              href="https://drive.google.com/file/d/1Z_U1BShJhkC9eX_GmwzEpD4jsJcKaca8/view?usp=drivesdk"
              alt="#"
            >
              Resume
            </a>
          </button>
          <button className="font-bold bg-orange-500 px-10 py-5 rounded-xl hover: hover:bg-slate-300">
            <a href="mailto:224abhishekjha@gmail.com">Email me</a>
          </button>
        </div>
      </div>
      <div className="flex m-auto pt-20 ">
        <div className="h-[400px] w-[400px]  bg-orange-600 rounded-[100%] relative">
          <img
            src={photo}
            alt="logo"
            className="absolute top-10 h-[400px] w-[400px] rounded-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

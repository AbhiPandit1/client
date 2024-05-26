import React from 'react';
import convergeHub from '../../assets/converge.png';

const Projects = () => {
  const projects = [
    {
      id: '1',
      name: 'Converge Hub',
      image: convergeHub,
      link: 'https://converge-hub.vercel.app/',
      title: 'My Converge Hub',
      desc: 'I am excited to introduce you to ConverHub Meeting Room  a project I have poured my heart into. Utilizing the latest Next.js and TypeScript technologies, ConverHub Meeting Room provides a secure platform for seamless collaboration and engagement during meetings. Users can easily log in, create meetings, and access various features like recording, screen sharing, and participant management. Whether logging in via social sign-on or traditional email and password methods, starting new meetings with customizable settings, or managing aspects like recording and reactions, ConverHub Meeting Room offers full control and convenience. With the ability to schedule future meetings, review past sessions, and enjoy real-time functionality across devices, ConverHub Meeting Room is designed to enhance your virtual collaboration experience. Join the community today and witness the future of virtual meetings!',
    },
    {
      id: '1',
      name: 'Converge Hub',
      image: convergeHub,
      link: 'https://converge-hub.vercel.app/',
      title: 'My Converge Hub',
      desc: 'I am excited to introduce you to ConverHub Meeting Room  a project I have poured my heart into. Utilizing the latest Next.js and TypeScript technologies, ConverHub Meeting Room provides a secure platform for seamless collaboration and engagement during meetings. Users can easily log in, create meetings, and access various features like recording, screen sharing, and participant management. Whether logging in via social sign-on or traditional email and password methods, starting new meetings with customizable settings, or managing aspects like recording and reactions, ConverHub Meeting Room offers full control and convenience. With the ability to schedule future meetings, review past sessions, and enjoy real-time functionality across devices, ConverHub Meeting Room is designed to enhance your virtual collaboration experience. Join the community today and witness the future of virtual meetings!',
    },
    {
      id: '1',
      name: 'Converge Hub',
      image: convergeHub,
      link: 'https://converge-hub.vercel.app/',
      title: 'My Converge Hub',
      desc: 'I am excited to introduce you to ConverHub Meeting Room  a project I have poured my heart into. Utilizing the latest Next.js and TypeScript technologies, ConverHub Meeting Room provides a secure platform for seamless collaboration and engagement during meetings. Users can easily log in, create meetings, and access various features like recording, screen sharing, and participant management. Whether logging in via social sign-on or traditional email and password methods, starting new meetings with customizable settings, or managing aspects like recording and reactions, ConverHub Meeting Room offers full control and convenience. With the ability to schedule future meetings, review past sessions, and enjoy real-time functionality across devices, ConverHub Meeting Room is designed to enhance your virtual collaboration experience. Join the community today and witness the future of virtual meetings!',
    },
    {
      id: '1',
      name: 'Converge Hub',
      image: convergeHub,
      link: 'https://converge-hub.vercel.app/',
      title: 'My Converge Hub',
      desc: 'I am excited to introduce you to ConverHub Meeting Room  a project I have poured my heart into. Utilizing the latest Next.js and TypeScript technologies, ConverHub Meeting Room provides a secure platform for seamless collaboration and engagement during meetings. Users can easily log in, create meetings, and access various features like recording, screen sharing, and participant management. Whether logging in via social sign-on or traditional email and password methods, starting new meetings with customizable settings, or managing aspects like recording and reactions, ConverHub Meeting Room offers full control and convenience. With the ability to schedule future meetings, review past sessions, and enjoy real-time functionality across devices, ConverHub Meeting Room is designed to enhance your virtual collaboration experience. Join the community today and witness the future of virtual meetings!',
    },
  ];

  return (
    <div className=" h-full w-full  pt-10 font-extrabold">
      <div className="relative flex flex-col items-center">
        <h1 className="text-center text-[2.4rem] sm:text-[2.8rem]  word-xs">
          PERS
          <span className="text-center text-[2.8rem] sm:text-[3.2rem] text-orange-500">
            O
          </span>
          NAL PR
          <span className="text-center text-[2.8rem] sm:text-[3.2rem] text-orange-500">
            O
          </span>
          JECTS
        </h1>
        <div className="absolute bottom-0 w-[90%] sm:w-[60%] h-1 bg-orange-500 left-[50%] transform -translate-x-[50%]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-10 sm:ml-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" border-2 h-120 w-[80vw] sm:w-[40vw] gap-29 border-solid border-orange-500 p-10  rounded-lg shadow-md"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-[12rem] w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 hover:text-blue-900 hover:text-3xl transition-all duration-300 ease-in-out">
              <a href={project.link}>{project.title}</a>
            </h2>
            <p className="mb-4 overflow-hidden" style={{ maxHeight: '10vh' }}>
              {project.desc}
            </p>
            <a
              href={`/projects/${project.id}`}
              className="text-blue-500 hover:underline"
            >
              Show More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

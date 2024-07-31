import convergeHub from '../assets/converge.png';
import portfolio from '../assets/portfolio.png';
import campaign from '../assets/campaign.png';
import Gym from '../assets/Gym.png';
import sidcupReplica from '../assets/sidcupReplica.png'; // Add the image path for Sidcup Replica
import programPanda from '../assets/program-panda.png'; // Add the image path for ProgramPanda

const projects = [
  {
    id: '1',
    name: 'Converge Hub',
    image: convergeHub,
    link: 'https://converge-hub.vercel.app/',
    github: 'https://github.com/AbhiPandit1/ConvergeHub',
    technologies: ['Next.js', 'TypeScript'],
    title: 'Converge Hub Meeting Room',
    desc: 'Converge Hub Meeting Room is a cutting-edge platform designed for seamless virtual collaboration. Built with Next.js and TypeScript, it offers secure and efficient tools for scheduling, managing meetings, and real-time interactions. Key features include recording, screen sharing, and social sign-on options, making it an ideal choice for both personal and professional virtual meetings.',
  },
  {
    id: '2',
    name: 'Portfolio Website',
    image: portfolio,
    link: 'https://client-zeta-ten-45.vercel.app/projects/1',
    github: 'https://github.com/AbhiPandit1/client',
    technologies: ['React.js', 'Tailwind CSS'],
    title: 'Personal Portfolio Website',
    desc: 'This portfolio website is a showcase of my skills and projects, designed with React.js and Tailwind CSS. It highlights my expertise in frontend development with a focus on clean, responsive design. The site features a user-friendly interface and detailed project descriptions, providing a comprehensive view of my work and accomplishments.',
  },
  {
    id: '3',
    name: 'Azhar Campaign',
    image: campaign,
    link: 'https://firstproject-i36x.vercel.app/',
    github: 'https://github.com/AbhiPandit1/firstproject',
    technologies: ['React.js', 'CSS', 'Netlify'],
    title: 'Azhar Campaign Website',
    desc: 'The Azhar Campaign website is dedicated to driving social change and raising awareness. Developed with React.js and styled with CSS, it offers an engaging and interactive user experience. The platform empowers visitors to get involved, learn about the cause, and contribute to the campaign’s mission through a compelling and intuitive interface.',
  },
  {
    id: '4',
    name: 'Gym Management System',
    image: Gym,
    link: 'https://gym-management-system.vercel.app/',
    github: 'https://github.com/AbhiPandit1/gymwebsitemain',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    title: 'Gym Management System',
    desc: 'This Gym Management System is a robust solution for managing memberships, class schedules, and staff. With a frontend built using React.js and a backend powered by Node.js and Express, it offers comprehensive features and seamless integration with MongoDB. The system ensures efficient operations and easy management for gym administrators and staff.',
  },
  {
    id: '5',
    name: 'Sidcup Family Golf Replica',
    image: sidcupReplica,
    link: 'https://sidcupfamilygolf.com/',
    github: 'https://github.com/AbhiPandit1/portfolio3d',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    title: 'Sidcup Family Golf Replica',
    desc: 'This project is a detailed replica of the Sidcup Family Golf website, created using HTML, CSS, JavaScript, and GSAP for smooth animations. The replica was inspired by a YouTube tutorial and aims to provide a similar user experience as the original site. The project highlights the capabilities of frontend technologies and showcases my ability to replicate complex designs with attention to detail.',
  },
  {
    id: '6',
    name: 'ProgramPanda Gym Website',
    image: programPanda,
    link: 'https://gymwebsitemain-1.onrender.com/',
    github: 'https://github.com/AbhiPandit1/newgymwebsite',
    technologies: [
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'Cloudinary',
      'Docker',
      'AWS S3',
      'AWS EC2',
    ],
    title: 'ProgramPanda Gym Website',
    desc: 'The ProgramPanda Gym Website is a dynamic platform designed to streamline gym management and enhance user experience. Developed with React.js and Vite for a responsive frontend, and Node.js with MongoDB for backend operations, it includes advanced features such as user dashboards, program tracking, trainer management, and admin tools. The site uses Cloudinary for image storage, Docker for containerization, and AWS services for scalable cloud solutions. This project highlights the integration of modern technologies to deliver a comprehensive and efficient digital experience.',
  },
];

export default projects;

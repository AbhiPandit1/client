import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import projects from '../../data/data';

const ProjectDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 hover:underline mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back to Home
      </button>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full sm:w-1/2 h-auto object-cover rounded-lg mb-4 mx-auto"
      />
      <p className="text-lg sm:text-xl mb-4">{project.desc}</p>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Technologies Used:</h2>
        <ul className="list-disc list-inside ml-4 text-lg sm:text-xl">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <a
          href={project.github}
          className="flex items-center text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" /> GitHub Repository
        </a>
        <a
          href={project.link}
          className="flex items-center text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="mr-2" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDescription;

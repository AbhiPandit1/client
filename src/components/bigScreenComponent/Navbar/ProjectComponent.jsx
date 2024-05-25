import React from 'react';

const ProjectComponent = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-black border-2 h-120 w-[80vw] sm:w-[40vw] gap-4 border-solid border-orange-500 p-10  rounded-lg shadow-md"
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
  );
};

export default ProjectComponent;

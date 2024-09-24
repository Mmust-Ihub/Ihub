import React from 'react'

function ProjectCard({project}) {
    return (
      <div className="flex flex-col rounded-[10px] border-2 border-secondary">
        <img
          src={project.imageUrl}
          alt="project image"
          className="w-full rounded-t-[10px] object-cover h-[250px]"
        />
        <div className="p-2">
          <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
          <h4 className="font-bold">{project.headline}</h4>
          <p>{project.description.slice(0, 150) + "..."}</p>
        </div>
        <div className="w-full flex items-start px-2 py-3">
          <button className="p-1 rounded-md bg-tersiary text-white">
            View more
          </button>
        </div>
      </div>
    );
}

export default ProjectCard
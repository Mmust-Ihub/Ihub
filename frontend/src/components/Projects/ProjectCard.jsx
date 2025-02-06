import React, { useContext } from "react";

function ProjectCard({ project }) {
  const title = project.title;
  return (
    <div className="flex flex-col rounded-[10px] border-2 border-secondary items-start justify-between">
      <img
        src={project.imageUrl}
        alt="project image"
        className="w-full rounded-t-[10px] object-cover h-[250px]"
      />
      <div className="p-2 py-4">
        <h3 className="text-xl font-bold text-tersiary capitalize">{title === 'iot'? IoT : title}</h3>
        <h4 className="font-bold">{project.headline}</h4>
        <p>{project.description.slice(0, 150) + "..."}</p>
      </div>
      <div className="w-full flex items-start px-2 py-3">
        <button className="px-4 py-2 rounded-md bg-tersiary text-white self-baseline items-end justify-end">
          View more
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;

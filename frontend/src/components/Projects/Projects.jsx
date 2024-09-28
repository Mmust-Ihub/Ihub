import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const FetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/projects`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchProjects();
  }, []);

  return (
    <div className="w-screen px-6 md:px-12 lg:px-20 py-8">
      <h2 className="text-secondary w-full text-start  font-bold text-3xl mt-6 mb-8">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p>Loading...</p>
        ) : (
          projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })
        )}
      </div>
    </div>
  );
}

export default Projects;

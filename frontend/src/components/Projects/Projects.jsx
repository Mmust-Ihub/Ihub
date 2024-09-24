import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const FetchProjects = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://ihub-mu.vercel.app/api/v1/projects', {
                method: 'GET',
            });
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.log(error);
        } finally
        {
            setLoading(false);
        }
    }
    useEffect(() => {
        FetchProjects();
    }, [])

  return (
    <div className='py-20 lg:w-[80vw] '>
      <h2 className="text-secondary w-full text-start  font-bold text-2xl mt-4 mb-4">
        Our Projects
          </h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {loading ? (<p>Loading...</p>) : (
                    projects.map((project, index) => {
                        return <ProjectCard key={index} project={project} />
                    })
                )}
             
          </div>
          
    </div>
  );
}

export default Projects
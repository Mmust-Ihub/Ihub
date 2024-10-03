import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useEffect, useState } from "react";
import Loading from "../components/common/Loading";

const FocusProjects = () => {
  const { project } = useParams();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (project) {
      FetchProjects();
    }
  }, [project]);

  const FetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/projects/${project}`
      );
      const data = await response.json();
      
      setProjects(data); // Store fetched projects in state
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-screen  px-4 mb-44 pt-24 md:px-16 lg:px-40">
        <h2 className="text-secondary w-full font-bold text-2xl mt-8 mb-4">
          {project} Projects
        </h2>
        <div>
          {loading ? (
            <Loading text={"Loading Projects"} />
          ) : (
            <div className="grid grid-cols-1 md:gap-5 lg:gap-7 gap-4">
              {projects.length > 0 ? (
                projects.map((proj) => (
                  <div
                    key={proj.title}
                    className="bg-slate-100 hover:scale-105 transition-all gap-4 p-4 h-fit rounded-lg w-full flex flex-col md:flex-row shadow-lg"
                  >
                    <img className="h-[200px] rounded-lg object-cover" src={proj.imageUrl[0]} alt="" />

                    <div>
                      <h1 className="text-xl font-bold text-gray-800">
                        {proj.title}
                      </h1>
                      <p className="text-gray-600">{proj.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No projects found.</p> // Handle case with no projects
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FocusProjects;

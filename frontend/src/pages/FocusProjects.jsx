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
    project && FetchProjects();
  }, []);

  const FetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/projects/${project}`
      );
      const data = await response.json();
      
    } catch (error) {
      console.log(error);
    } finally
    {
      setLoading(false);
    }
  }
  return (
    <div>
      <Header />

      <div className="w-screen min-h-screen px-4 pt-24 md:px-16 lg:px-40 ">
        <h2 className="text-secondary w-full font-bold text-2xl mt-8 mb-4">
          {project} Projects
        </h2>
        <div>
          {loading ? (
            <Loading text={"Loading Projects"} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-gray-800">
                  Project Name
                </h1>
                <p className="text-gray-600">Project Description</p>
                <button className="bg-secondary text-white px-4 py-2 mt-2 rounded-lg">
                  View Project
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FocusProjects;

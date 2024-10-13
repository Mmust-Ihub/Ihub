import { Link, useParams } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import useAuthToken from "./admin/AuthContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
const FocusProjects = () => {
  const { getItem } = useAuthToken();
  const { token } = getItem();

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
  console.log(projects);
  const handleDeleteProject = async (id) => {
    if (!token) {
      alert("You need to login to delete a project");
      return;
    }
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/projects/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        var data = await response.json();
        if (data.status === "success") {
          toast.success("Project deleted successfully");
          await FetchProjects();
        } else {
          console.log(data);
          toast.error(data?.status + data?.message);
        }
      } catch (error) {
        toast.error(data?.message);
        console.error("Error deleting project:", error);
      }
    }
  };
  return (
    <div>
      <Header />
      <ToastContainer />
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
                    <img
                      className="h-[200px] rounded-lg object-cover"
                      src={proj.imageUrl[0]}
                      alt=""
                    />

                    <div>
                      <h1 className="text-xl font-bold text-gray-800">
                        {proj.title}
                      </h1>
                      <p className="text-gray-600">{proj.description}</p>
                    </div>
                    {token && (
                      <p
                        className="w-full text-center flex items-end justify-end  px-2 py-2 text-red-500 hover:cursor-pointer"
                        onClick={() => {
                          handleDeleteProject(proj?._id);
                        }}
                      >
                        Delete{" "}
                        <RiDeleteBin6Line className="text-red-500 text-xl " />
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <div className="h-screen w-scren justify-start  flex">
                  <div className="flex flex-col items-start">
                    <img src="/not-found.gif" className="w-[200px]" alt="" />
                    <h1 className="text-xl w-full text-center  font-bold text-gray-800">
                      No projects in {project} category
                    </h1>
                    <Link
                      to="/projects"
                      className="bg-primary text-center p-3 rounded-lg font-semibold text-white mt-4"
                    >
                      View other Project categories
                    </Link>
                  </div>
                </div>
              )}

              <Link
                to="/projects"
                className="bg-primary max-w-[300px] text-center p-3 rounded-lg font-semibold text-white mt-4"
              >
                View other Project categories
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FocusProjects;

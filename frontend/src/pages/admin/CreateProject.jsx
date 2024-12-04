import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProject = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    categories: [],
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProject({
      ...project,
      image: e.target.files[0],
    });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setProject((prevProject) => ({
        ...prevProject,
        categories: [...prevProject.categories, value],
      }));
      console.log(project.categories);
    } else {
      setProject((prevProject) => ({
        ...prevProject,
        categories: prevProject.categories.filter(
          (category) => category !== value
        ),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    toast.loading("Creating project...");

    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("description", project.description);
    project.categories.forEach((category) =>
      formData.append("category[]", category)
    );

    if (project.image) {
      formData.append("image", project.image);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/projects`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      toast.dismiss();
      toast.success("Project created successfully!");
      window.location.reload();
      // window.location.href = "/projects";
    } catch (error) {
      toast.dismiss()
      toast.error("There was a problem with the submission.");
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="bg-slate-100 p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4  p-4 ">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              className="h-12 p-2 rounded-md outline-none w-full mb-3"
              placeholder="Enter project title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              className="h-32 p-2 rounded-md outline-none w-full mb-3"
              placeholder="Enter project details"
              required
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Categories
            </label>
            <div className="flex flex-wrap gap-4 ">
              {/* Category checkboxes */}
              {[
                "fintech",
                "edutech",
                "agritech",
                "healthtech",
                "ai-ml",
                "iot",
                "blockchain",
                "climatetech",
              ].map((category) => (
                <label key={category} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={category}
                    onChange={handleCategoryChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 capitalize">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="py-4">
            <label className="block text-sm font-medium text-gray-700">
              Project Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="mt-1 block w-full text-gray-700"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Creating..." : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;

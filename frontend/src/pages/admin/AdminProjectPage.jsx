import React, { useState } from "react";

const ProjectPage = () => {
  const [project, setProject] = useState({
    title: "",
    headline: "",
    description: "",
    category: "",
    image: null,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("headline", project.headline);
    formData.append("description", project.description);
    formData.append("category", project.category);
    formData.append("image", project.image);
    console.log(project.image)

    try {
      const response = await fetch("https://ihub-mu.vercel.app/api/v1/projects", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pY2hhZWxtYWluYTI4NDlAZ21haWwuY29tIiwiaWF0IjoxNzI3MDcwOTE5LCJleHAiOjE3Mjc2NzU3MTksImF1ZCI6IjY2ZjEwMjkyYzVlOWNhNzg3ZDIyZGU4MiIsImlzcyI6ImFwcGxpY2F0aW9uIn0.X9z1NB8N2_KXv5KWs8g_4hOB2VAt6qboNi01hgy9L08`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Project</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter project title"
              required
            />
          </div>

          {/* Headline */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Headline
            </label>
            <input
              type="text"
              name="headline"
              value={project.headline}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter brief project description"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter project details"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={project.category}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select Category</option>
              <option value="web">Web</option>
              <option value="android">Android</option>
              <option value="machine">Machine Learning</option>
              <option value="artificial">Artificial Intelligence</option>
              <option value="blockchain">Blockchain</option>
              <option value="robotics">Robotics</option>
              <option value="iot">IoT</option>
            </select>
          </div>

          {/* Image */}
          <div>
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
            <button onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectPage;

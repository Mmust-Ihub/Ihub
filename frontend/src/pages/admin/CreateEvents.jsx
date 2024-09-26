import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CreateEvents = () => {
  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    long_description: "",
    start_date: "",
    end_date: "",
    tags: "",
    event_link: "",
    image: null,
  });
  const [loading, setLoading] = useState(false)
  const notify = (message) => toast.success(message)
  const errNotify = (message) => toast.error(message)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("short_description", formData.short_description);
    form.append("long_description", formData.long_description);
    form.append("start_date", formData.start_date);
    form.append("tags", formData.tags.split(","));
    form.append("event_link", formData.event_link);
    form.append("image", formData.image);
    form.append("end_date", formData.end_date);

    try {
      notify("Loading")
      const response = await fetch(`${import.meta.env.VITE_BACKENED_URL}/events`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const data = await response.json();
      console.log("Event created successfully:", data);
      notify("Event created successfully!");

    } catch (error) {
      errNotify("An error occured. Try again")
      console.error("Error creating event:", error);
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <div className="flex justify-center p-5  pt-20 bg-gray-100">
      <ToastContainer/>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Short Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2"
            htmlFor="short_description"
          >
            Short Description
          </label>
          <textarea
            id="short_description"
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Long Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2"
            htmlFor="long_description"
          >
            Long Description
          </label>
          <textarea
            id="long_description"
            name="long_description"
            value={formData.long_description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="start_date">
            Start Date
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        {/* End Date */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="end_date">
            End Date
          </label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="tags">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Event Link */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="event_link">
            Event Link
          </label>
          <input
            type="url"
            id="event_link"
            name="event_link"
            value={formData.event_link}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Image */}
        <div className="mb-6">
          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Event"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
          )}
          <label className="block text-gray-700 mb-2" htmlFor="image">
            Event Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvents;

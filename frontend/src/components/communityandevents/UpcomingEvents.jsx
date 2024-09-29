import React, { useEffect, useState } from 'react'
import Card from "./Card";
import robot from "../../assets/communityandevent/robot.webp";
import { toast, ToastContainer } from 'react-toastify';
function UpcomingEvents() {
  const [Events, setEvents] = useState([]);
  const [page, setPage] = useState(0); // Current page
  const [perPage, setPerPage] = useState(6); // Number of events per page
  const [totalEvents, setTotalEvents] = useState(0); // To track total number of events
  const [loading, setLoading] = useState(false);
  const Errnotify = (message) => toast.error(message);

  useEffect(() => {
    FetchEvents(page, perPage); 
  }, [page, perPage]);

  const FetchEvents = async (page = 0, perPage = 6) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BACKENED_URL
        }/events/upcoming?page=${page}&perPage=${perPage}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setEvents(data.events); // Assuming the events come in a key `events`
      setTotalEvents(data.total); // Assuming the total number of events is returned in a `total` field
    } catch (e) {
      Errnotify("Failed to fetch Upcoming events. Reload");
    }finally{
      setLoading(false);
    }
  };

  // Convert ISO date format to a readable date format
  const convertISOToNormal = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} @${hours}:${minutes}`;
  };

  // Handle page navigation
  const handleNextPage = () => {
    if (page * perPage < totalEvents) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-secondary font-bold text-3xl mt-6 mb-2">
        Upcoming Events
      </h2>
      <p>
        Our events are open to all who share our passion for innovation. Check
        out our events calendar and register for an upcoming event that
        interests you. Whether you’re looking to learn something new, meet
        potential collaborators, or just get inspired, there’s an event for you
        at MMUST iHub
      </p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {Events?.length > 0 ? (
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4">
              {Events.map((event) => (
                <Card
                  key={event._id}
                  date={`${convertISOToNormal(
                    event.start_date
                  )} - ${convertISOToNormal(event.end_date)}`}
                  image={event.image_url || robot} // Use robot image as fallback
                  title={event.title}
                  event_type={event.event_type}
                  tags={event.tags}
                  short_description={event.short_description}
                  slug={event.slug}
                  event_link={event.event_link}
                />
              ))}
            </div>
          ) : (
            <p className="W-full text-center text-tersiary  font-bold text-2xl my-4">
              No Upcoming events available at the moment.
            </p>
          )}
          {page > 0 && (
            <div className="w-full justify-between flex flex-row">
              <button
                className="text-tersiary underline underline-offset-1"
                onClick={() => {
                  if (page > 0) setPage((prev) => prev - 1);
                }}
              >
                Previous
              </button>
              {Events.length > perPage - 1 && (
                <button
                  className="text-tersiary underline underline-offset-1"
                  onClick={() => {
                    if (page > 0) setPage((prev) => prev - 1);
                  }}
                >
                  {" "}
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UpcomingEvents;
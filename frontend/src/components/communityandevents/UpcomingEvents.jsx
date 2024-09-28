import React, { useEffect, useState } from 'react'
import Card from "./Card";
import robot from "../../assets/communityandevent/robot.webp";
import { toast, ToastContainer } from 'react-toastify';

function UpcomingEvents() {
    const [Events, setEvents] = useState([]);
    const Errnotify = (message) => toast.error(message)
  useEffect(() => {
      FetchEvents()
    }, []);
  const FetchEvents = async () => {
      console.log(` ${import.meta.env.VITE_BACKENED_URL}/events/upcoming`);
        try {
            const res = await fetch(
            ` ${import.meta.env.VITE_BACKENED_URL}/events/upcoming`,
            {
                method: "GET"
            }    
        );
          const data = await res.json()
          console.log(data)
        setEvents(data)
        } catch (e) {
          console.log(e)
            Errnotify("Failed to fetch Upcoming events. Reload")
        }
    }

    const convertISOToNormal = (isoDateString) => {
      const date = new Date(isoDateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${day}/${month}/${year} @${hours}:${minutes}`;
    };
  return (
    <div>
      <ToastContainer/>
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

      {Events.length > 0 ? (
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4">
                  {Events.map((event) => (
                      <Card
                          key={event._id}
                          date={`${convertISOToNormal(
                              event.start_date
                          )} - ${convertISOToNormal(event.end_date)}`}
                          image={event.image_url || robot} // Use robot image as fallback
                          title={event.title}
                          location={
                              event.event_type === "in-person" ? "School Grounds" : "Online"
                          }
                      />
                  ))}
        </div>
      ) : (
        <p className="W-full text-center text-tersiary  font-bold text-2xl my-4">
          No Upcoming events available at the moment.
        </p>
      )}
    </div>
  );
}

export default UpcomingEvents;
import React, { useEffect, useState } from "react";
import Card from "./Card";
import robot from "../../assets/communityandevent/robot.webp";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../common/Loading";
import useAuthToken from "../../pages/admin/AuthContext";
import { RiDeleteBin6Line } from "react-icons/ri";
function PrevEvents() {
  const [Events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [loading, setLoading] = useState(false);
  const Errnotify = (message) => toast.error(message);
  const { getItem } = useAuthToken();
  const { token } = getItem();
  useEffect(() => {
    FetchEvents();
  }, []);

  const FetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/past`
      );
      const data = await response.json();

      if (!response.ok) {
        Errnotify("Failed to fetch previous events");
        return;
      }
      setEvents(data);
    } catch (error) {
      console.log(error);
      Errnotify("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvents = async (id) => {
    if (!token) {
      alert("You need to login to delete an event");
      return;
    }
    if (window.confirm("Are you sure you want to delete this Event?")) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/events/${id}`,
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
          toast.success("Event deleted successfully");
          await FetchEvents();
        } else {
          console.log(data);
          toast.error(data?.status + data?.message);
        }
      } catch (error) {
        toast.error(data?.message);
        console.error("Error deleting Event:", error);
      }
    }
  };
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
      <ToastContainer />
      <h2 className="text-secondary font-bold text-3xl mt-6 mb-2">
        Previous Events
      </h2>

      <p>
        View our past events and get a glimpse of what we have been up to. Our
        events are open to all who share our passion for innovation.
      </p>

      {loading ? (
        <Loading text={"Loading Previous Events"} />
      ) : (
        <div>
          {Events?.length > 0 ? (
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4">
              {Events?.map((event) => (
                <div className="flex flex-col">
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

                  {token && (
                    <p
                      className="w-full text-center flex items-end justify-end  px-2 py-2 text-red-500 hover:cursor-pointer"
                      onClick={() => {
                        handleDeleteEvents(event?._id);
                      }}
                    >
                      Delete{" "}
                      <RiDeleteBin6Line className="text-red-500 text-xl " />
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="W-full text-center text-tersiary  font-bold text-2xl my-4">
              No Previous events available at the moment.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default PrevEvents;

import React from 'react'
import Card from './Card';
import robot from "../../assets/communityandevent/robot.webp";
function Events() {
  return (
    <div className="w-[80%] mb-[160px]">
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
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4">
        <Card
          date={"29/09/2024 @8:00AM - 30/10/2024 @4:00PM"}
          image={robot}
          title={"Tech Innovators Workshop"}
          location={"School Grounds"}
        />
        <Card
          date={"29/09/2024 @8:00AM - 30/10/2024 @4:00PM"}
          image={robot}
          title={"Tech Innovators Workshop"}
          location={"School Grounds"}
        />
        <Card
          date={"29/09/2024 @8:00AM - 30/10/2024 @4:00PM"}
          image={robot}
          title={"Tech Innovators Workshop"}
          location={"School Grounds"}
        />
        <Card
          date={"29/09/2024 @8:00AM - 30/10/2024 @4:00PM"}
          image={robot}
          title={"Tech Innovators Workshop"}
          location={"School Grounds"}
        />
      </div>
    </div>
  );
}

export default Events
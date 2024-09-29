import React from 'react'
import PrevEvents from './PrevEvents.jsx';
import UpcomingEvents from './UpcomingEvents';
function Events() {
  return (
    <div className="w-[80%] mb-[160px]">
      <UpcomingEvents />
      <PrevEvents />
    </div>
  );
}

export default Events
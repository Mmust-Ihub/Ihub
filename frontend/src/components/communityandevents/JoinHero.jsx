import commIcons from "../../assets/communityandevent/commicons.webp";
import mic from "../../assets/communityandevent/mic.webp";
import React from 'react'
import Join from "./Join";

function JoinHero() {
  return (
    <div className="w-[80%] my-12">
      <Join
        title={"Join Our Diverse Community"}
        description={
          "Join MMUST iHub and become part of a dynamic community that’s driving innovation and entrepreneurship forward. As a member, you’ll have access to our resources, events, and a network of like-minded individuals who are passionate about making a difference."
        }
        image={commIcons}
        reverse={false}
        BtnText={"Become a member"}
      />
      <Join
        title={"Host An Event"}
        description={
          "Have an idea for an event? We’re always looking for new and exciting ways to engage our community. If you’d like to host a workshop, seminar, or another event, get in touch with us, and we’ll help you bring your idea to life."
        }
        image={mic}
        reverse={true}
        BtnText={"Book Now"}
      />
    </div>
  );
}

export default JoinHero
import React from "react";
import ProfilePic from "../assets/ProfilePicHidden.PNG";
const Profile = () => {
  return (
    <div className="Layout">
      <div className="Griding">
        <Picture />
        <About />
      </div>
    </div>
  );
};
const Picture = () => {
  return (
    <div>
      <img className="ProfilePic" src={ProfilePic} alt="Profile" />
    </div>
  );
};
const About = () => {
  return (
    <div className="AboutMe">
      <h1>مهندس باسل اسماعيل</h1>
      <p>
        {" "}
        انا طالب هندسة حاسوب في{" "}
        <a
          className="links"
          href="https://bau.edu.jo"
          target="_blank"
          rel="noreferrer"
        >
          جامعة البلقاء التطبيقية
        </a>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales mi
        nec felis porttitor rutrum. Nullam efficitur urna sed augue pulvinar, eu
        mattis nisl pretium.
      </p>
    </div>
  );
};
export default Profile;

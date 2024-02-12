import React from "react";
import ProfilePic from "../assets/ProfilePicHidden.PNG";
const Profile = () => {
  return (
    <div className="Layout">
      <div className="Griding">
        <About />
        <Picture />
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
        أي شيء يستحق الحصول عليه يستحق العمل من أجله. أي شيء تحبه يستحق القتال
        من أجله
      </p>
    </div>
  );
};
export default Profile;

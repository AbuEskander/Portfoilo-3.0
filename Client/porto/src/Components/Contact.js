import React from "react";
import SocialMedia from "../data/SocialMedia";
const Contact = () => {
  return (
    <div className="ContactMe">
      <h1> بتقدروا تلاقوني بمواقع التواصل الاجتماعي</h1>
      <div className="social-media">
        {SocialMedia.map((SocialMedia, i) => {
          return <Social key={i} SocialMedia={SocialMedia} />;
        })}
      </div>
    </div>
  );
};
const Social = ({ SocialMedia }) => {
  return (
    <div className="Social">
      <a
        className="Social-Icon"
        href={SocialMedia.Link}
        target="_blank"
        rel="noreferrer"
      >
        <img className="Social=IMG" src={SocialMedia.Icon} alt="Github" />
      </a>
      <p>{SocialMedia.title}</p>
      <p className="UserName">{SocialMedia.userName}</p>
    </div>
  );
};

export default Contact;

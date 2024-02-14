import React, { useState, useRef, useEffect, useCallback } from "react";
import ImageShadow from "react-image-shadow";
import MyProjects from "../data/MyProjects";
import ReadMore from "../svg/ReadMore.svg";
import Closing from "../svg/Closing.svg";
import GitHub from "../svg/GitHub.svg";
const Projects = () => {
  return (
    <div className="ProjectRoute">
      <h1> مجموعة من اخر مشرايعي في رحلتي لتعلم البرمجة</h1>
      <div className="Projects">
        {MyProjects.map((val) => {
          return <Project key={val.id} Project={val} />;
        })}
      </div>
    </div>
  );
};
const Project = ({ Project }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"Project "}>
      <h2>{Project.title}</h2>
      <div className="Project-Img"></div>
      <Popup
        val={Project}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        Project={Project}
      />
    </div>
  );
};
function Popup({ val, isOpen, setIsOpen, Project }) {
  const popupRef = useRef();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="Project-POP-Container">
      {
        <button className={"Project-Link "} onClick={togglePopup}>
          <ImageShadow
            className="ImageHover"
            src={Project.Image}
            alt="TodoList"
          />
        </button>
      }
      {isOpen && (
        <div ref={popupRef} className="Project-popup overlay">
          <div className="Project-popup-content">
            <button className="btn btn-light closingTag" onClick={togglePopup}>
              <img src={Closing} alt="Closing" />
            </button>

            <h2>{val.title}</h2>
            <p>{val.desc}</p>
            <h3>Technology</h3>
            <div className="tech">
              {val.technologies.map((tech) => {
                return <span className="techno">{tech}</span>;
              })}
            </div>
            {val.link && (
              <a className=" GithubLink" href={val.link} target="_blank">
                <button>
                  <span>GitHub Repository</span> <img src={GitHub} />
                </button>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;

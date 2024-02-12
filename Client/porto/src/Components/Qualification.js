import React, { useState } from "react";
import { FrontEnd, BackEnd, Languages } from "../data/Skills";
import Certificates from "../data/Certification";
import Link from "../svg/Link.svg";
import Closing from "../svg/Closing.svg";
const Qualification = () => {
  const style = {
    margin: "40px",
  };
  return (
    <>
      <div className="Qualification">
        <div className="Skills">
          <h2>Skills/المهارات</h2>
          <div className="Qualities">
            <Quality>
              <h3>Front-End</h3>
              <Skills Field={FrontEnd} />
            </Quality>
            <Quality>
              <h3>Back-End</h3>
              <Skills Field={BackEnd} />
            </Quality>
            <Quality>
              <h3>لغات</h3>
              <Skills Field={Languages} />
            </Quality>
          </div>
        </div>
        <h2>شهادات و اعتمادات</h2>
        <div className="Certifications">
          {Certificates.map((Certificate) => {
            return <Certification key={Certificate.id} Certi={Certificate} />;
          })}
        </div>
      </div>
    </>
  );
};

const Certification = ({ Certi }) => {
  return (
    <div className="Certificate">
      <div className="CertifiHeader">
        <img className="CertifiIcon" src={Certi.icon} alt={Certi.title} />
        <div className="titleOf">
          {" "}
          <h3>
            {Certi.title}
            <p>{Certi.by}</p>
          </h3>
        </div>
      </div>
      <Popup val={Certi} />
      <p className="CertiDate"> {Certi.date && `Issued ${Certi.date}`}</p>
    </div>
  );
};
const Quality = ({ children }) => {
  return <div className="Quality">{children}</div>;
};
const Skills = ({ Field }) => {
  return (
    <>
      <ul>
        {Field.map((val) => (
          <Skill sk={val} />
        ))}
      </ul>
    </>
  );
};
const Skill = ({ sk }) => {
  return (
    <div>
      <h4>{sk.name}</h4>
      <div className="percentage-bar">
        <div className="progress" style={{ width: `${sk.percentage}%` }}></div>
        <p style={{ textAlign: "right" }}>{sk.percentage}%</p>
      </div>
    </div>
  );
};

function Popup({ val }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      {!isOpen && (
        <button className="btn btn-light CreditLInk" onClick={togglePopup}>
          Read more!
        </button>
      )}
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="btn btn-light" onClick={togglePopup}>
              <img src={Closing} />
            </button>

            <h2>{val.title}</h2>
            <p>{val.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Qualification;

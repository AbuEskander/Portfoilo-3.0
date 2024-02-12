import React from "react";
import { FrontEnd, BackEnd, Languages } from "../data/Skills";
import Certificates from "../data/Certification";
import Link from "../svg/Link.svg";
const Qualification = () => {
  const style = {
    margin: "40px",
  };
  return (
    <>
      <div className="Qualification">
        <h2>المهارات</h2>
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
        <h3>{Certi.title}</h3>
      </div>
      <p>{Certi.by}</p>
      {Certi.link && (
        <a href={Certi.link} target="_blank">
          <button className="btn btn-light CreditLInk">
            Show Credential <img src={Link} />
          </button>
        </a>
      )}
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
      </div>
    </div>
  );
};
export default Qualification;

import React from "react";
import { FrontEnd, BackEnd, Languages } from "../data/Skills";
const Qualification = () => {
  const style = {
    margin: "40px",
  };
  return (
    <>
      <div className="Qualification">
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
    </>
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
          <li key={val.name}>{val.name}</li>
        ))}
      </ul>
    </>
  );
};
export default Qualification;

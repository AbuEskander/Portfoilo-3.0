import React from "react";

const Qualification = () => {
  const style = {
    margin: "40px",
  };
  return (
    <>
      <div className="Qualification">
        <h1 style={style}>مؤهلاتي</h1>
        <div className="Qualities">
          <Quality>
            {" "}
            <h2>اللغات</h2>
            <ul>
              <li>العربية</li>
              <li>الانجليزية</li>
            </ul>
          </Quality>
        </div>
      </div>
    </>
  );
};

const Quality = ({ children }) => {
  return <div className="Quality">{children}</div>;
};

export default Qualification;

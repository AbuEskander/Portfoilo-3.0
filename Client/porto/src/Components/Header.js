import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Paths from "../data/Paths";
import menu from "../svg/menu.svg";

const Header = () => {
  const ThisPath = useLocation();
  const CurrentRoute =
    Paths.find((val) => val.path === ThisPath.pathname)?.name ||
    " Sorry this is a Wrong Route '404 Not Found'";
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [Open, setOpen] = useState(false);
  const [Head, setHead] = useState(CurrentRoute);

  const handleHeader = (Path) => {
    setOpen(false);
    setHead(Path);
  };
  const handleToggle = (PathHere) => {
    setOpen(!Open);
  };
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <div className="HeaderLayout">
      {screenWidth > 800 ? (
        <Pages />
      ) : (
        <DropDown
          handleHeader={handleHeader}
          handleToggle={(Val) => handleToggle(Val)}
          Open={Open}
          screenWidth={screenWidth}
        />
      )}
      {screenWidth < 800 && <h1 className="Header">{Head}</h1>}
    </div>
  );
};
const DropDown = ({ Open, handleToggle, handleHeader, screenWidth }) => {
  const DropDownRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (DropDownRef.current && !DropDownRef.current.contains(e.target)) {
        handleToggle();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleToggle]);

  return (
    <div>
      <button className="BUTT" onClick={handleToggle}>
        <img className="" src={menu} alt="menu" />
      </button>
      {Open && (
        <div ref={DropDownRef} className="DropDown">
          {Paths.map((val) => (
            <Path
              key={val.name}
              Path={val}
              handleHeader={handleHeader}
              screenWidth={screenWidth}
            />
          ))}
        </div>
      )}
    </div>
  );
};
const Pages = ({ handleHeader }) => {
  return (
    <>
      {Paths.map((val) => (
        <Path key={val.name} Path={val} />
      ))}
    </>
  );
};
const Path = ({ Path, handleHeader, screenWidth }) => {
  const RouteChecker = useLocation();
  return (
    <Link
      to={Path.path}
      className={`routes animated-underline ${
        RouteChecker.pathname === Path.path && "Open"
      }`}
      onClick={() => screenWidth < 800 && handleHeader(Path.name)}
    >
      {Path.name}
    </Link>
  );
};

export default Header;

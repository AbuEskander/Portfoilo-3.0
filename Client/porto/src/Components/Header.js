import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Paths from "../data/Paths";
import menu from "../svg/menu.svg";
const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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
      {" "}
      {screenWidth > 800 ? <Pages /> : <DropDown />}
    </div>
  );
};
const DropDown = () => {
  const [Open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!Open);
  };
  return (
    <div>
      <button className="BUTT" onClick={handleToggle}>
        <img className="" src={menu} alt="menu" />
      </button>
      {Open && (
        <div className="DropDown">
          {Paths.map((val) => (
            <Path key={val.name} Path={val} onClickChange={handleToggle} />
          ))}
        </div>
      )}
    </div>
  );
};
const Pages = () => {
  return (
    <>
      {Paths.map((val) => (
        <Path key={val.name} Path={val} />
      ))}
    </>
  );
};
const Path = ({ Path, onClickChange }) => {
  const RouteChecker = useLocation();
  return (
    <Link
      to={Path.path}
      className={`routes animated-underline ${
        RouteChecker.pathname === Path.path && "Open"
      }`}
      onClick={onClickChange}
    >
      {Path.name}
    </Link>
  );
};
const Menu = () => {
  return menu;
};

export default Header;

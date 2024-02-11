import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <Routes />
    </div>
  );
};
const Routes = () => {
  const RouteChecker = useLocation();
  return (
    <>
      {" "}
      <Link
        to={"/"}
        className={`routes animated-underline ${
          RouteChecker.pathname === "/" && "Open"
        }`}
      >
        Home
      </Link>
      <Link
        className={`routes animated-underline ${
          RouteChecker.pathname === "/Projects" && "Open"
        }`}
        to="/Projects"
      >
        Projects
      </Link>
      <Link
        className={`routes animated-underline ${
          RouteChecker.pathname === "/contact" && "Open"
        }`}
        to="/contact"
      >
        Contact
      </Link>{" "}
    </>
  );
};

export default Header;

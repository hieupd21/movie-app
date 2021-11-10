import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tmovie.png";
import "./Header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Show",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/" className="logo__wrap">
            <img src={logo} alt="" />
            <p>NITFLEX</p>
          </Link>
        </div>

        <div className="navlist">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

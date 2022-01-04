import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css"

const Menu = () => {
  return (
    <div className={s.navBar}>
      <NavLink to="/" className={s.home}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.movies}>
        Movies
      </NavLink>
    </div>
  );
};

export default Menu;
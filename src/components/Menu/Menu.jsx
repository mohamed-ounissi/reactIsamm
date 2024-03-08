import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/hello"
            style={({ isActive }) => (isActive ? { color: "red" } : {})}
          >
            Hello
          </NavLink>
        </li>
        <li>
          <NavLink to="tasks"  style={({ isActive }) => (isActive ? { color: "red" } : {})}>Tasks</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

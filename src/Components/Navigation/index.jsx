import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../img/avatar.jpeg";
import { NavigationStyled } from "./styled";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            Informações
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Conhecimentos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Recados
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
}

export default Navigation;

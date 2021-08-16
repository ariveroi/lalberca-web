import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import "../../assets/styles/Navbar2.css";

const NavbarEdit = () => {
  //INSERTAR FUNCIONALIDAD
  return (
    <Navbar expand="lg">
      <Navbar.Toggle id="toggle" aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink activeClassName="active" exact to="/">
              INICIO
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink activeClassName="active" to="/reserva">
              RESERVA
            </NavLink>
          </li> */}
          <li id="carta" className="nav-item dropdown">
            <NavLink activeClassName="active" to="/carta">
              CARTA/MENÚ
            </NavLink>
            <ul id="carta-dropdown">
              <li>
                <NavLink exact to="/carta/platos">
                  CARTA
                </NavLink>
              </li>
              <li>
                <NavLink to="/carta/menu">MENÚ DIARIO</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/nosotros">
              SOBRE NOSOTROS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/contacto">
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarEdit;

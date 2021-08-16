import React from "react";
import { Route, Switch } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import Reserva from "../pages/Reserva/Reserva";
import MainCarta from "../pages/Carta/MainCarta";
import ReservaHora from "../pages/Reserva/ReservaHora";

import "../../assets/styles/Container.css";
import Contacto from "../pages/Contacto/Contacto";
import MenuDiario from "../pages/Carta/MenuDiario";
import AboutUs from "../pages/About Us/AboutUs";
import Carta from "../pages/Carta/Carta";

const Container = (props) => {
  return (
    <div className="contenedor">
      <Switch>
        <Route exact path="/" component={Inicio} />
        {/* <Route exact path="/reserva" component={Reserva} /> */}
        <Route exact path="/reserva/hora" component={ReservaHora} />
        <Route exact path="/carta" component={MainCarta} />
        <Route exact path="/carta/platos" component={Carta} />
        <Route exact path="/carta/menu" component={MenuDiario} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/nosotros" component={AboutUs} />
      </Switch>
    </div>
  );
};

export default Container;

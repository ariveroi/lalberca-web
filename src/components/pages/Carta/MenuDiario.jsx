import React, { useState, useEffect } from "react";

import img from "../../../assets/images/mediterraneo.jpg";

const MenuDiario = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("cargado");
    return () => setActive("");
  }, []);
  return (
    <div className={`menu-diario ${active}`}>
      <div className="menu-diario-container">
        <h2>Menú Diario</h2>
        <div className="platos-container">
          <img id="primeros-foto" alt="primeros platos lalberca" src={img} />
          <div className="platos-list">
            <h4>Primeros</h4>
            <div id="primeros" className="platos">
              <ul>
                <li>Espaguetis Boloñesa</li>
                <li>Espaguetis con gambas</li>
                <li>Rissoto</li>
              </ul>
              <ul>
                <li>Arroz a la cubnana</li>
                <li>Caldo de Cocido</li>
                <li>Ensalada</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="platos-container">
          <img id="primeros-foto" alt="primeros platos lalberca" src={img} />
          <div className="platos-list">
            <h4>Primeros</h4>
            <div id="primeros" className="platos">
              <ul>
                <li>Espaguetis Boloñesa</li>
                <li>Espaguetis con gambas</li>
                <li>Rissoto</li>
              </ul>
              <ul>
                <li>Arroz a la cubnana</li>
                <li>Caldo de Cocido</li>
                <li>Ensalada</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="platos-container">
          <img id="primeros-foto" alt="primeros platos lalberca" src={img} />
          <div className="platos-list">
            <h4>Primeros</h4>
            <div id="primeros" className="platos">
              <ul>
                <li>Espaguetis Boloñesa</li>
                <li>Espaguetis con gambas</li>
                <li>Rissoto</li>
              </ul>
              <ul>
                <li>Arroz a la cubnana</li>
                <li>Caldo de Cocido</li>
                <li>Ensalada</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="precio">
            <h2>10,50€</h2>
            <p>*Nuestro menú incluye primero, un segundo, postre o café</p>
        </div>
      </div>
    </div>
  );
};

export default MenuDiario;

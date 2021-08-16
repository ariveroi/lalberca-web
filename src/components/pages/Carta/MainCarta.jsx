import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainCarta = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("cargado");
    return () => setActive("");
  }, []);

  return (
    <div className={`component-container ${active}`}>
      <div className="carta-link">
        <h2>Carta</h2>
        <Link to="/carta/platos">
          <div id="platos-link"></div>
        </Link>
        {/* <Link style={{ backgroundImage: { pasta } }} to="/carta/platos"></Link> */}
        {/* <img alt="pasta" src={pasta} /> */}
      </div>
      <div className="menu-link">
        <h2>Menú</h2>
        <Link to="/carta/menu">
          <div id="menu-link"></div>
        </Link>
      </div>
    </div>
  );
};

export default MainCarta;

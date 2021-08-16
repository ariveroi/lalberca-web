import React, { useState, useEffect } from "react";

import {
  entrantes,
  ensaladas,
  carnes,
  verduras_huevos,
  pescados,
} from "../../constants/carta";

const listaEntrantes = entrantes.map((entrante) => (
  <div className="plato-seccion" key={entrante.id}>
    <div className="comida">{entrante.plato}</div>
    <div className="separator"></div>
    <div className="precio">{entrante.precio}€</div>
  </div>
));
const listaEnsaladas = ensaladas.map((ensalada) => (
  <div className="plato-seccion" key={ensalada.id}>
    <div className="comida">{ensalada.plato}</div>
    <div className="separator"></div>
    <div className="precio">{ensalada.precio}€</div>
  </div>
));
const listaHuevos = verduras_huevos.map((verdura) => (
  <div className="plato-seccion" key={verdura.id}>
    <div className="comida">{verdura.plato}</div>
    <div className="separator"></div>
    <div className="precio">{verdura.precio}€</div>
  </div>
));
const listaCarnes = carnes.map((carne) => (
  <div className="plato-seccion" key={carne.id}>
    <div className="comida">{carne.plato}</div>
    <div className="separator"></div>
    <div className="precio">{carne.precio}€</div>
  </div>
));
const listaPescados = pescados.map((pescado) => (
  <div className="plato-seccion" key={pescado.id}>
    <div className="comida">{pescado.plato}</div>
    <div className="separator"></div>
    <div className="precio">{pescado.precio}€</div>
  </div>
));

const Carta = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("cargado");
    return () => setActive("");
  }, []);

  return (
    <div className={`component-container ${active}`}>
      <div className="carta-alberca">
        <div className="carta-seccion">
          <h3 className="carta-title">Entrantes</h3>
          <div className="entrantes-todo">{listaEntrantes}</div>
        </div>
        <div className="carta-seccion">
          <h3 className="carta-title">Ensaladas</h3>
          <div className="entrantes-todo">{listaEnsaladas}</div>
        </div>
        <div className="carta-seccion">
          <h3 className="carta-title">Verdura y Huevo</h3>
          <div className="entrantes-todo">{listaHuevos}</div>
        </div>
        <div className="carta-seccion">
          <h3 className="carta-title">Carnes</h3>
          <div className="entrantes-todo">{listaCarnes}</div>
        </div>
        <div className="carta-seccion">
          <h3 className="carta-title">Pescados</h3>
          <div className="entrantes-todo">{listaPescados}</div>
        </div>
      </div>
    </div>
  );
};

export default Carta;

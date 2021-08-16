import React, { useEffect, useState } from "react";
import "./Inicio.css";
import img from "../../../assets/images/Inicio.jpg";

const Inicio = (props) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("cargado");
    return () => setActive("");
  }, []);

  return (
    <div className={`home-contenedor ${active}`}>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="text-container">
        {/* <h2>l'alberca</h2> */}
        <h4>Disfrutar comiendo no tiene por qué salir caro</h4>
        <br />
        <div className="text">
          <p>
            Cómo negocio familiar, en L'alberca seguimos un principio clave a la
            hora de trabajar en nuestro restaurante: hacer que te sientas cómo
            en casa.
          </p>
          <p>
            Nuestro pequeño restaurante destaca por la variedad de su carta
            mediterránea, que como nuestro local, está abierta a todos los
            gustos.
          </p>

          <p>
            Tanto si vienes a tomar un desayuno, un aperitivo, a comer, a tomar
            una cerveza o a cenar, nuestro restaurante estará siempre abierto
            para ti y tus seres queridos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

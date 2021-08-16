import React, { useState, useEffect } from "react";

import img from "../../../assets/images/about_us.jpg";

const AboutUs = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("cargado");
    return () => setActive("");
  }, []);
  return (
    <div className={`nosotros ${active}`}>
      <div className="nosotros-container">
        <h2>Sobre nosotros</h2>
        <img id="lady" alt="lady" src={img} />
        <p id="parrafo-nosotros">
          Nuestro restaurante está situado en la zona de la Avenida de Europa,
          en Pozuelo de Alarcón, concretamente detrás de la Parroquia Santa
          María de Caná. No tiene pérdida.{" "}
        </p>
        <p>Me presento, soy Viorica Ferchi, propietaria de L'alberca.</p>
        <p>
          En el año 2000 me vine a vivir a Madrid desde mi pueblo Telciu,
          Rumania, con mis tres hijos, de 7, 8 y 9 años, para empezar una nueva
          vida. En Madrid empecé a trabajar donde pude, aunque a mi siempre me
          gustó la cocina que practicaba todos los días dando de comer a los
          trabajadores de mi granja de Rumania. Mi oportunidad llegó a través de
          los restaurantes Baravaca y El Legado de Castilla León (hoy cerrado),
          donde trabajé 8 años y aprendí los intríngulis de la cocina española.
        </p>
        <p>
          En febrero de 2013, con la ayuda de mi compañero, Jesús González,
          decidí abrir mi propio negocio, en la parcela de la calle Atenas
          número 2, donde, pese a la fuerte competencia existente, estamos muy
          contentos y sacamos el negocio adelante entre mis 3 hijos, ahora de
          26, 27 y 29 años, y yo.
        </p>
        <p> ¡Ven a conocernos!</p>
      </div>
    </div>
  );
};

export default AboutUs;

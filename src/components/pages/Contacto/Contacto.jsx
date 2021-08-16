import React, { useState, useEffect } from "react";

const Contacto = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("cargado");
    return () => setActive("");
  }, []);
  return (
    <div className={`contacto-container ${active}`}>
      <div className="contacto-form-container">
        <div className="contacto-info">
          <h3>Restaurante l'alberca</h3>
          <div className="contacto-enlaces">
            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8506264688654!2d-3.8011627842614857!3d40.434306379363036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4187fb5f612acf%3A0x2f6517426283378!2sCalle%20Atenas%2C%202%2C%2028224%20Pozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1613157485992!5m2!1ses!2ses">
              Calle Atenas 2, Pozuelo de Alarcón, 28224, Madrid
            </a>
            <a href="mailto:lalberca@gmail.com">lalberca@gmail.com</a>
            <a href="tel:913651212">91 365 12 12</a>
          </div>
        </div>
        {/* <div className="spacer"></div>
        <div className="contacto-form">
          <h5>Escribenos</h5>
          <form id="form">
            <div id="data">
              <div id="name">
                <input id="input-name" type="text" placeholder="Nombre" />
              </div>
              <div id="email">
                <input id="input-email" type="text" placeholder="Email" />
              </div>
              <div id="telefono">
                <input
                  id="input-telefono"
                  type="number"
                  placeholder="Telefono"
                />
              </div>
            </div>
            <div id="mensaje">
              <textarea
                id="input-mensaje"
                placeholder="Escribe aquí tu mensaje..."
              />
            </div>
          </form>
          <button id="submit-form">Enviar</button>
        </div> */}
      </div>
      <div className="contacto-iframe-container">
        <iframe
          id="iframe-maps"
          title="Lalberca maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8506264688654!2d-3.8011627842614857!3d40.434306379363036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4187fb5f612acf%3A0x2f6517426283378!2sCalle%20Atenas%2C%202%2C%2028224%20Pozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1613157485992!5m2!1ses!2ses"
          allowFullScreen
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;

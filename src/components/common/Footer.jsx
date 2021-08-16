import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

// import { Link } from "react-router-dom";

import "../../assets/styles/Footer.css";
// import { AiOutlineConsoleSql } from "react-icons/ai";

const Footer = (props) => {
  return (
    <>
      <div id="footer-container">
        <div className="footer-info">
          <div className="contact">
            <ul>
              <li>
                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8506264688654!2d-3.8011627842614857!3d40.434306379363036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4187fb5f612acf%3A0x2f6517426283378!2sCalle%20Atenas%2C%202%2C%2028224%20Pozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1613157485992!5m2!1ses!2ses">
                  Calle Atenas 2, Pozuelo de Alarcón, 28224, Madrid
                </a>
              </li>
              <li>
                <a href="mailto:lalberca@gmail.com">lalberca@gmail.com</a>
              </li>
              <li>
                <a href="tel:913651212">91 365 12 12</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <span>
              <FaIcons.FaFacebookF size={30} />
            </span>
            <span>
              <FaIcons.FaTripadvisor size={30} />
            </span>
            <span>
              <AiIcons.AiOutlineInstagram size={30} />
            </span>
          </div>
          <div className="footer-nav">
            <ul className="footer-components">
              <li className="nav-link">INICIO</li>
              {/* <li className="nav-link">RESERVA</li> */}
              <li className="nav-link">CARTA</li>
              <li className="nav-link">SOBRE NOSOTROS</li>
              <li className="nav-link">CONTACTO</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

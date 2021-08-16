import React, { useState, useEffect } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "../../../assets/styles/Reserva.css";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

const Reserva = (props) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("cargado");
    return () => setActive("");
  }, []);
  const [startDate, setStartDate] = useState(new Date());
  const [formActive, setFormActive] = useState("");

  return (
    <div className={`reservas ${active}`}>
      <h2>Reserva tu mesa ya!</h2>
      <div className={`calendar-container ${formActive}`}>
        <h3>¿Qué día?</h3>
        <DatePicker
          locale="es"
          date={startDate}
          onSelect={(date) => {
            setStartDate(date);
            setFormActive("show");
            props.history.push({
              pathname: "/reserva/hora",
              state: { startDate: startDate },
            });
          }}
          inline
        />
      </div>
    </div>
  );
};

export default Reserva;

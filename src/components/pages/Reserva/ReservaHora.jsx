import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import "../../../assets/styles/Reserva.css";
import "../../../assets/styles/Modal.scss";

const ReservaHora = (props) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive("cargado");
    return () => setActive("");
  }, []);
  const [hora, setHora] = useState("");
  const [show, setShow] = useState("");
  const startDate = props.location.state.startDate;

  const handleHourSelect = (e, hour) => {
    e.preventDefault();
    setHora(hour);
    setShow("show");
  };

  return (
    <div className={`form-container ${active}`}>
      <h2>Reserva tu mesa ya!</h2>
      <h3>¿A qué hora quieres reservar?</h3>
      <div className="hour-select">
        <div className="row">
          <button onClick={(e) => handleHourSelect(e, "9:00")}>9:00</button>
          <button onClick={(e) => handleHourSelect(e, "9:30")}>9:30</button>
          <button onClick={(e) => handleHourSelect(e, "10:00")}>10:00</button>
          <button onClick={(e) => handleHourSelect(e, "10:30")}>10:30</button>
          <button onClick={(e) => handleHourSelect(e, "11:00")}>11:00</button>
          <button onClick={(e) => handleHourSelect(e, "11:30")}>11:30</button>
          <button onClick={(e) => handleHourSelect(e, "12:00")}>12:00</button>
          <button onClick={(e) => handleHourSelect(e, "12:30")}>12:30</button>
          <button onClick={(e) => handleHourSelect(e, "13:00")}>13:00</button>
          <button onClick={(e) => handleHourSelect(e, "13:30")}>13:30</button>
          <button onClick={(e) => handleHourSelect(e, "14:00")}>14:00</button>
          <button onClick={(e) => handleHourSelect(e, "14:30")}>14:30</button>
          <button onClick={(e) => handleHourSelect(e, "15:00")}>15:00</button>
          <button onClick={(e) => handleHourSelect(e, "15:30")}>15:30</button>
          <button onClick={(e) => handleHourSelect(e, "16:00")}>16:00</button>
          <button onClick={(e) => handleHourSelect(e, "16:30")}>16:30</button>
          <button onClick={(e) => handleHourSelect(e, "17:00")}>17:00</button>
          <button onClick={(e) => handleHourSelect(e, "17:30")}>17:30</button>
          <button onClick={(e) => handleHourSelect(e, "18:00")}>18:00</button>
          <button onClick={(e) => handleHourSelect(e, "18:30")}>18:30</button>
          <button onClick={(e) => handleHourSelect(e, "19:00")}>19:00</button>
          <button onClick={(e) => handleHourSelect(e, "19:30")}>19:30</button>
          <button onClick={(e) => handleHourSelect(e, "20:00")}>20:00</button>
          <button onClick={(e) => handleHourSelect(e, "20:30")}>20:30</button>
          <button onClick={(e) => handleHourSelect(e, "21:00")}>21:00</button>
          <button onClick={(e) => handleHourSelect(e, "21:30")}>21:30</button>
          <button onClick={(e) => handleHourSelect(e, "22:00")}>22:00</button>
          <button onClick={(e) => handleHourSelect(e, "22:30")}>22:30</button>
        </div>
      </div>
      <MyModal
        startDate={startDate}
        hora={hora}
        show={show}
        onHide={() => setShow("show out")}
        cancel={() => props.history.push("/reserva")}
      />
    </div>
  );
};

const MyModal = (props) => {
  const [personas, setPersonas] = useState("1");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      subject: `Reserva de ${nombre} (${email})`,
      message: `Quiero hacer una reserva el ${props.startDate} a las ${props.hora} para ${personas} personas`,
    };
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://email-sender-test-ari.herokuapp.com/api/reserva", reqOptions)
      .then((res) => console.log("email sent"))
      .catch((errors) => console.log(errors));
    props.cancel();
  };
  return (
    <div onClick={props.onHide} className={`mymodal ${props.show}`}>
      <div className="mymodal-content">
        <div className="mymodal-header">
          <h4>Reservar mesa a las {props.hora}</h4>
          <button onClick={props.onHide} className="mymodal-close-button ">
            <AiIcons.AiOutlineClose />
          </button>
        </div>
        <div className="mymodal-body">
          <Form>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>¿Para cuantas personas?</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    onChange={(e) => setPersonas(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6 o más">6 o más</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="nombre"
                placeholder="¿Cómo te llamas?"
                onChange={(e) => setNombre(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div className="mymodal-footer">
          <button onClick={props.cancel} className="btn btn-danger">
            Cancelar
          </button>
          <button onClick={props.onHide} className="btn btn-secondary">
            Cerrar
          </button>
          <button onClick={handleSubmit} className="btn btn-primary">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservaHora;

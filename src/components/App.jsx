import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../assets/styles/App.css";
import Container from "./common/Container";
import Footer from "./common/Footer";
import Header from "./common/Header";
import NavbarEdit from "./common/NavbarEdit";

function App() {
  return (
    <Router>
      <div className="content">
        <Header />
        <NavbarEdit />
        <Container />
      </div>
      {/* <Switch>
        <Route exact path="/" component={Container} />
      </Switch> */}
      {/* <Navbar/>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
      <Footer /> */}
      <Footer />
    </Router>
  );
}

export default App;

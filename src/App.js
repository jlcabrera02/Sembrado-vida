import React from "react";
import Home from "./front/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detalles from "./front/Detalles";
//import Exam from "./components/Exam";
import Error from "./front/Error";
import Auth from "./front/Auth";
import AddEvent from "./front/AddEvent";
//import { ErrorGlobal } from "./assets/assetsHtml";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/detalles-:plantaId" exact>
            <Detalles />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/asignar-planta" exact>
            <AddEvent />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

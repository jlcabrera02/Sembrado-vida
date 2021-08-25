import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detalles from "./pages/Detalles";
import Error from "./pages/Error";
import Auth from "./pages/Auth";
import AddEvent from "./pages/AddEvent";

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

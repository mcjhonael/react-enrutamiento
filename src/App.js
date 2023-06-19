import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/home/Home";
import Pos from "./screens/pos/Pos";
import Platos from "./screens/platos/Platos";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/pos'>Punto de Venta</Link>
              </li>
              <li>
                <Link to='/platos'>Lista de platos</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/pos'>
            <Pos />
          </Route>
          <Route path='/platos'>
            <Platos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

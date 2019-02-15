import React from 'react';
import { Link } from "react-router-dom";
import './style.css';


const App = props => {
  return (
    <div  >
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                 <a class="nav-link" href="#"><Link to="/access">Entrar</Link> <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/register">Registrarse</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/recover">Recuperar cuenta</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/tickets">Tickets</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/products">Help</Link></a>
                </li>
              </ul>
              <span class="navbar-text" > Marshall Servers </span>
            </div>
        </nav>
      {props.children}
    </div>
  );
}

export default App;

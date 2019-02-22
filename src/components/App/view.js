import React from 'react';
import { Link } from "react-router-dom";
import './style.css';


const App = props => {
  return (
    <div  >
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                 <a className="nav-link" ><Link to="/access">Entrar</Link> <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><Link to="/register">Registrarse</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><Link to="/recover">Recuperar cuenta</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><Link to="/tickets">Tickets</Link></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><Link to="/products">Help</Link></a>
                </li>
              </ul>
              <span className="navbar-text" > Marshall Servers </span>
            </div>
        </nav>
      {props.children}
    </div>
  );
}

export default App;

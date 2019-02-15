import React from 'react'


const Register = () => {
  return (
    <div id="centerWidth">
      <form className="col-md-4">
        <div className="form-group">
          <h4>Completa el formulario para registrarte</h4>
          <label for="exampleInputEmail1">Usuario</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su usuario"/>
        </div>
       <div className="form-group">
         <label for="exampleInputPassword1">Contraseña</label>
         <input type="password" className="form-control" id="inputPassword" placeholder="Ingrese su contraseña"/>
      </div>
      <div className="form-group">
         <label for="exampleInputPassword1">Repetir contraseña</label>
         <input type="password" className="form-control" id="inputPassword" placeholder="Reingrese su contraseña"/>
      </div>
      <div className="form-group">
          <label for="exampleInputEmail1">Correo electrónico</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su email"/>
        </div>
        <div id="centerWidth">
      <input className="col-md-4 text-center btn-primary btn btn-dark btn-lg" type="button" value="Entrar"></input>
      </div>
    </form>
    </div>
  )
}

export default Register
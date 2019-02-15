import React from 'react'


const Recover = () => {
  return (
    <div id="centerWidth">
      <form className="col-md-4">
        <div className="form-group">
          <h4>Ingresa tu correo para recuperar tus datos</h4>
          <label for="exampleInputEmail1">Correo electrónico</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su email"/>
        </div>
        <div id="centerWidth">
        <input className="col-md-4 text-center btn-primary btn btn-dark btn-lg" type="button" value="Enviar datos"></input>
        </div>
      
    </form>
    </div>
  )
}

export default Recover
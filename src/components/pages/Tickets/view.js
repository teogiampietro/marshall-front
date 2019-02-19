import React from 'react'

const Tickets = () => {
    return (
        <div id="centerWidth">
            <form>
                <div class="form-row">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Prioridad
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Baja</button>
                            <button class="dropdown-item" type="button">Media</button>
                            <button class="dropdown-item" type="button">Alta</button>
                        </div>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Mensaje" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Tickets
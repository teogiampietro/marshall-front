import React from 'react'

const Tickets = () => {
    return (
        <div id="centerWidth">
            <form>
                <div class="form-row">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Tickets
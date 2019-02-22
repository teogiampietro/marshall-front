import React, { Component } from 'react';
import './style.css';

class TicketList extends Component {

    constructor(props) {
        super(props);
        this.state = { message: '', priority: '' }
        this.nameInput = React.createRef();
        this.priorityInput = React.createRef();

    }

    componentWillMount() {
        this.props.getTickets();
    }

    changeName = evt => {
        this.setState({ message: evt.target.value })
    }

    changePriority = evt => {
        this.setState({ priority: evt.target.value })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const { addTicket } = this.props
        const { name, priority } = this.state
        addTicket({ name, priority })
    }

    getTicketList = () => {
        const { tickets } = this.props
        return tickets.map(item => (
            <tbody className="table-striped">
                <tr>
                    <th scope="row" >
                        {item.message}
                    </th>
                    <th>
                        {item.priority}
                    </th>
                </tr>
            </tbody>
        ))
    }
    render() {
        return (
            <div className="container mt-4" >
                <div className="col-12" >
                    <form >
                        <div class="form-row">
                            <div className="dropdown col-2">
                                <button
                                    className="form-control btn btn-dark dropdown-toggle btn-block"
                                    type="button" ref={this.priorityInput}
                                    onChange={this.changePriority}
                                    id="dropdownMenu2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Prioridad
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Baja</button>
                                    <button className="dropdown-item" type="button">Media</button>
                                    <button className="dropdown-item" type="button">Alta</button>
                                </div>
                            </div>
                            <div className=" form-row col-8 ">
                                <input type="text" ref={this.nameInput} onChange={this.changeName} className="form-control" placeholder="Mensaje" />
                            </div>
                            <div className="form-row col-2 ">
                                <input className="form-control btn btn-dark btn-block" type="submit" value="Add" />
                            </div>
                        </div>

                    </form>
                </div>
                <table class="table mt-4 table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Mensaje de error</th>
                            <th scope="col">Prioridad</th>
                        </tr>
                    </thead>
                    {this.getTicketList()}
                </table>

            </div>

        )
    }
}

export default TicketList;
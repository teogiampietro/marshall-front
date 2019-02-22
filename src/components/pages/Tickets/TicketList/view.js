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
            <div className="row" key={item.id}>
                <div className="col-sm-4">
                    {item.message + ' / ' + item.priority}
                </div>
            </div>
        ))

    }
    render() {
        return (
            <div >
                <div id="centerWidth" >
                    <form>
                        <div className="form-row">
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
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
                            <div className="col">
                                <input type="text" ref={this.nameInput} onChange={this.changeName} className="form-control" placeholder="Mensaje" />
                            </div>

                        </div>
                    </form>
                </div>
                {this.getTicketList()}
            </div>

        )
    }
}

export default TicketList;
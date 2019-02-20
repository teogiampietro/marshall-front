import React, { Component } from 'react';
import './style.css';

class TicketList extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', priority: '' }
        this.nameInput = React.createRef();
        this.priorityInput = React.createRef();
    }

    componentWillMount() {
        this.props.getTickets();
    }

    changeName = evt => {
        this.setState({ name: evt.target.value })
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
            <div key={item.id}>
                {item.name + ' ' + item.priority}
            </div>
        ))
    }

    render() {
        return (
            <div id="centerWidth">
                <form>
                    <div class="form-row">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" ref={this.priorityInput} onChange={this.changePriority} id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Prioridad
                        </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Baja</button>
                                <button class="dropdown-item" type="button">Media</button>
                                <button class="dropdown-item" type="button">Alta</button>
                            </div>
                        </div>
                        <div class="col">
                            <input type="text" ref={this.nameInput} onChange={this.changeName} class="form-control" placeholder="Mensaje" />
                        </div>
                    </div>
                </form>
                {this.getTicketList()}
            </div>
        )
    }

}

export default TicketList;
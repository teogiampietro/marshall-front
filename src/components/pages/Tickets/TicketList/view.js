import React, { Component } from 'react';
import './style.css';

class TicketList extends Component {

    constructor(props) {
        super(props);
        this.state = { id:'', message: '', priority: '' }
        this.messageInput = React.createRef();
        this.priorityInput = React.createRef();
        this.ticketID = React.createRef();
        this.text = "Prioridad";
    }

    componentWillMount() {
        this.props.getTickets();
    }

    changeMessage = evt => {
        this.setState({ message: this.messageInput.current.value })
    }

    changePriority = evt => {
        evt.preventDefault()
        this.setState({ priority: evt.target.id })
        this.dropdownchange(evt);
    }
    changeId = evt => {
        console.log(this.tickets.map)
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const { addTicket } = this.props
        const { message, priority } = this.state
        addTicket({ priority, message })
    }
    
    getTicketList = () => {
        const { tickets } = this.props
        return tickets.map(item => (
            <tbody>
                <tr>
                    <th>{item.message}</th>
                    <th ref={this.ticketID}>{item.id}</th>
                    <th>{item.priority}</th>
                    <th><input className="btn btn-dark btn-block" type="submit" value="E" onClick={this.changeId}/></th>
                    <th><input className="btn btn-dark btn-block" type="submit" value="M" /></th>
                </tr>
            </tbody>
            
        ))
    }
    dropdownchange = evt => {
        switch (evt.target.id) {
            case "Baja":
                {
                    this.text = evt.target.id; break;
                }
            case "Media":
                {
                    this.text = evt.target.id; break;
                }
            case "Alta":
                {
                    this.text = evt.target.id; break;
                }
            default:
                break;
        }
    }
    render() {

        return (
            <div className="container mt-4 col-md-12">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-row">
                            <div className="dropdown col-2">
                                <button
                                    className="form-control btn btn-dark dropdown-toggle btn-block"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    {this.text}
                                </button>
                                <div ref={this.priorityInput} className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button" value="Baja" id="Baja" onClick={this.changePriority} > Baja</button>
                                    <button className="dropdown-item" type="button" value="Media" id="Media" onClick={this.changePriority}> Media</button>
                                    <button className="dropdown-item" type="button" value="Alta" id="Alta" onClick={this.changePriority} > Alta</button>
                                </div>
                            </div>
                            <div className=" form-row col-8 ">
                                <input type="text" className="form-control mr-2" ref={this.messageInput} onChange={this.changeMessage} />
                            </div>
                            <div className="form-row col-2 ">
                                <input className="form-control btn btn-dark btn-block" type="submit" value="Agregar" />
                            </div>
                        </div>
                    </form>
                </div>
                <table class="table table-bordered mt-4 col-12">
                    <thead className="thead-dark">
                        <tr>
                            <th className="col-md-7">Mensaje de error</th>
                            <th className="col-md-1">ID</th>
                            <th className="col-md-2">Prioridad</th>
                            <th className="col-md-1"></th>
                            <th className="col-md-1"></th>
                        </tr>
                    </thead>
                    {this.getTicketList()}
                </table>

            </div>
        )
    }
}

export default TicketList;
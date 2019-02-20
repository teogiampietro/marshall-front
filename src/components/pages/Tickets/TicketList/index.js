import { connect } from 'react-redux'
import TicketList from './view'
import { addTicketThunk, getTicketsThunk } from '../../../../actions/tickets'

const mapStateToProps = state => ({
    tickets: state.tickets.list,
    isLoading: state.tickets.isLoading,
    errorMessage: state.tickets.error
})

const mapDispatchToProps = dispatch => ({
    addTicket: item => { dispatch(addTicketThunk(item)) },
    getTickets: () => { dispatch(getTicketsThunk()) }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketList)
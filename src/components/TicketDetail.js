import React from "react";
import PropTypes from "prop-types";
function TicketDetail(props){
  const { ticket, onClickingDelete} = props;//this is known as object destructuring. Its a way of copying whatever is in the bracketrs and setting it ewqual to teh variable so that it can be used in the component
  // without the following above we cannot call on ticket and onclick below
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={ props.onClickingEdit}>UpdateTicket</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}
TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default TicketDetail;
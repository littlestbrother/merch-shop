import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";


function TicketList(props){
  return (
    <React.Fragment>
      <hr/>
        {props.ticketList.map((ticket) =>
          <Ticket 
            whenTicketClicked = { props.onTicketSelection}//TicketControl passes the handleChangingSelectedTicket method using onTicketSelction prop

            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            id={ticket.id}//we include id because key cant be pssed as a prop to a child component
            key={ticket.id}/>
        )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};
export default TicketList;
import React from "react";
import PropTypes from "prop-types";
function Ticket(props){
  // hard coded code right here baby^^
  return (
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};
export default Ticket;
import React from "react";
import ticketsImage from "./../img/tickets.jpeg";
function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="An image of man falling into a void" />
    </React.Fragment>
  );
}

export default Header;
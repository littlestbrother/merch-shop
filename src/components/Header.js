import React from "react";
import ticketImage from "./../img/ticket4.png";
function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketImage} alt="An image of man falling into a void" />
    </React.Fragment>
  );
}

export default Header;
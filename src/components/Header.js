import React from "react";
import merchImage from "./../img/shop-keeper.png";
function Header() {
  return (
    <React.Fragment>
      <h1>Hyrule Castle Town Shop</h1>
      {/* eslint-disable-next-line */}
      <img src={merchImage}/>
    </React.Fragment>
  );
}

export default Header;

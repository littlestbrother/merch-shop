import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.merchList.map((merch) => (
        <Merch
          whenMerchClicked={props.onMerchSelection} //MerchControl passes the handleChangingSelectedMerch method using onMerchSelction prop
          name={merch.name}
          description={merch.description}
          quantity={merch.quantity}
          id={merch.id} //we include id because key cant be pssed as a prop to a child component
          key={merch.id}
        />
      ))}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func,
};
export default MerchList;

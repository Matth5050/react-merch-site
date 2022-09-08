import React from "react";
import PropTypes from "prop-types";


function Item(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.type} - {props.title}</h3>
        <h5>{props.description}</h5>
        <h5>{props.quantity}</h5>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;
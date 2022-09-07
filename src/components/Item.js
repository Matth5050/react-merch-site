import React from "react";
import ItemList from "./ItemList";
import PropTypes from "prop-types";


function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.type} - {props.title}</h3>
      <h5>{props.description}</h5>
      <h5>{props.number}</h5>
    </React.Fragment>
  );
}

Item.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number
};

export default Item;
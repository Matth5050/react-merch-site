import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";


function ItemList(props) {

    return (
      <React.Fragment>
        <div>
          {props.itemList.map((item) =>
          <Item 
          whenItemClicked = { props.onItemSelection }
          type={item.type}
          title={item.title}
          description={item.description}
          quantity={item.quantity}
          id={item.id}
          key={item.id}/>
          )}
        </div> 
      </React.Fragment>
    );
  }

  ItemList.propTypes = {
    ticketList: PropTypes.array,
    onItemSelection: PropTypes.func
  };

export default ItemList;
import React from "react";
import Item from "./Item";


class ItemList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count:[0,0,0]
    };
  }

  handleBuyClick = () => {
    this.setState({count: this.state.count - 1});
  }

  handleRestockClick = () => {
    this.setState({count: this.state.count + 1});
  }


  render (){

    const mainItems = [
      {
        type: "t-shirt",
        title: "Hotel Pensecola",
        description: "comfortable t-shirt in all sizes"
      },
      {
        type: "hodie",
        title: "The long worm",
        description: "a hoodie with the classic album design!"
      },
      {
        type: "t-shirt",
        title: "Take it breezy",
        description: "fantasic t-shirt perfect for taking it easy in"
      }
    ];

    return (
      <React.Fragment>
        <div>
          {mainItems.map((item, index) =>
          <Item type={item.type}
          title={item.title}
          description={item.description}
          quantity={item.quantity}
          key={index}/>
          )}
        </div>
       
      </React.Fragment>
    );
  }
}

export default ItemList;
import React, { Component } from "react";
import { cars } from "../data.json";

const ProductContext = React.createContext();

class Productprovider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: [...this.state.products, cars],
    });
  }









  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handledetail: this.handledetail,
          addtocart: this.addtocart,
          openmodel: this.openmodel,
          closeopen: this.closeopen,
          increment: this.increment,
          decrement: this.decrement,
          clearcart: this.clearcart,
          removeitem: this.removeitem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { Productprovider, ProductConsumer };

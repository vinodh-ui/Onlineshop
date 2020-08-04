import React, { Component, Fragment } from "react";
import Cart from "../Cart/Cart";
import { cars } from "../../data.json";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: [],
      cart: [],
      show: false,
    };
  }

  componentDidMount() {
    this.setState({
      Product: this.state.Product.concat(cars),
    });
  }

  checkout = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  addcart = (id) => {
    let data = [...this.state.Product, cars];
    let cv = data.find((pr) => pr.id === id);
    this.setState({
      cart: [...this.state.cart, { ...cv, count: 1 }],
    });
  };

  cancelitems = () => {
    this.setState({
      cart: [""],
    });
  };

  deleteproduct = (id) => {
    let cartdatas = this.state.cart;
    let filterdata = cartdatas.filter((pr) => pr.id !== id);
    this.setState({
      cart: filterdata,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="col-md-7  col-sm-6 col-xs-12   Cart-sec">
          <Cart
            cartdata={this.state.cart}
            cancelitems={this.cancelitems}
            deleteproduct={this.deleteproduct}
            handleClose={this.handleClose}
            handleShow={this.handleShow}
            show={this.state.show}
            checkout={this.checkout}
          />
        </div>

        <div className="productlists-sec   col-md-5 col-sm-6 col-xs-12">
          {this.state.Product.map((pr) => {
            return (
              <div
                key={pr.id}
                className="Productlists-view"
                onClick={() => {
                  this.addcart(pr.id);
                }}
              >
                <img src={pr.images} />
                <p className="product_title"> {pr.name} </p>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

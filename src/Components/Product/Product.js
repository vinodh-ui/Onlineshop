import React, { Component, Fragment } from "react";
import Cart from "../Cart/Cart";
import axios from 'axios'
import { toast } from "react-toastify";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product:[],
      cart:localStorage.getItem("cartdata")? JSON.parse(localStorage.getItem("cartdata")):[],
      show:false,
    
    };
  }

  componentDidMount() {
  axios.get("http://localhost:8080/cars") 
     .then(res=>{
      this.setState({Product:[...res.data]})
     })
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

  addcart = (pr) => {
    let clonecart = this.state.cart.slice();
    let already = false;
    clonecart.forEach((item) => {
      if (item.id === pr.id) {
        item.count++;
        already = true;
      }
    });
    if (already === false) {
      clonecart.push({ ...pr, count: 1 });
    }
    this.setState({ cart: clonecart });
    localStorage.setItem("cartdata", JSON.stringify(clonecart));
    
  };

  increment = (id) => {
    let tempinc = [...this.state.cart];
    let selectedcart = tempinc.find((item) => item.id === id);
    let index = tempinc.indexOf(selectedcart);
    let product = tempinc[index];
    product.count++;
    this.setState(
      () => {
        return {
          cart: [...tempinc],
        };
      },
        );
  };

  dec = (id) => {
    let tempincv = [...this.state.cart];
    let selectedcartv = tempincv.find((itemv) => itemv.id === id);
     let indexv = tempincv.indexOf(selectedcartv);
    let producv = tempincv[indexv];
      producv.count--;

    if (producv.count == 0) {
      let tempincv = [...this.state.cart];
      let selectedcartv = tempincv.find((itemv) => itemv.id === id);
      let indexv = tempincv.indexOf(selectedcartv);
      let producv = tempincv[indexv];
      producv.count += 1;
      toast.error("Quantity can not be zero  value");
    }

    this.setState(
      () => {
        return {
          cart: [...tempincv],
        };
      },
      );
  };

  deleteproduct = (pr) => {
    let cartdatas = [...this.state.cart];
   let filterdata = cartdatas.filter((prv) => prv.id !== pr.id);
    this.setState({
      cart: filterdata,
    });
    localStorage.setItem("cartdata", JSON.stringify(filterdata));
  };

  render() {
    return (
      <Fragment>
        <div className="col-md-7  col-sm-6 col-xs-12   Cart-sec">
          <Cart  cartdata={this.state.cart}
            cancelitems={this.cancelitems}
            deleteproduct={this.deleteproduct}
            handleClose={this.handleClose}
            handleShow={this.handleShow}
            show={this.state.show}
            checkout={this.checkout}
            IncrementItem={this.increment}
            dec={this.dec}
          />
        </div>
        <div className="productlists-sec   col-md-5 col-sm-6 col-xs-12">
          {this.state.Product.map((pr) => {
            return (
              <div key={pr.id}className="Productlists-view" onClick={() => this.addcart(pr)} >
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

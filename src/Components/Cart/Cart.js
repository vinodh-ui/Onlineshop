import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import handleClose from 'react-bootstrap/handleclose';

export default class Cart extends Component {
  render() {
    return (
      <Fragment>
        <table className="cart-table">
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th> QUANTITY</th>
            <th> TOTAL</th>
          </tr>

          {this.props.cartdata.length === 0 ? (
            <td colSpan="4" className="empty-cart-sec">
              <h1>EmptyList (SelectProduct) </h1>
            </td>
          ) : (
            ""
          )}

          {this.props.cartdata.map((pr) => {
            return (
              <tr key={pr.id} className="cart-data">
                <td>
                  {" "}
                  <span
                    className="cart-delete"
                    onClick={() => this.props.deleteproduct(pr.id)}
                  >
                    X
                  </span>{" "}
                  <span className="pr-name"> {pr.name} </span>{" "}
                </td>
                <td> {pr.total_price} </td>
                <td>
                  {" "}
                  <span
                    onClick={() => {
                      this.props.incremencount();
                    }}
                    className="count-inc"
                  >
                    -
                  </span>
                  <span className="count-box">{pr.count}</span>
                  <span
                    onClick={() => this.props.decrement()}
                    className="cout-dec"
                  >
                    +
                  </span>
                </td>
                <td> </td>
              </tr>
            );
          })}
        </table>

        <table className="summary-table">
          <tr>
            <td> SubTotal</td>
            <td className="cart-data"> 20.0 MYR</td>
            <td className="cart-data"> {this.props.cartdata.length} items</td>
          </tr>
          <tr>
            <td>TAX</td>
            <td className="cart-data"> 0%</td>
            <td className="cart-data">0.0 MYR</td>
          </tr>
          <tr>
            <td>DISCOUNT</td>
            <td className="cart-data">N/A</td>
            <td className="cart-data">MYR</td>
          </tr>

          <tr>
            <td>TOTAL</td>
            <td className="cart-data">N/A</td>
            <td className="cart-data"></td>
          </tr>
        </table>
        <div className="Summary-btn-sec">
          <button className="btn btn-cancel">CANCEL</button>
          <button
            className="btn  btn-checkout"
            onClick={() => this.props.checkout()}
          >
            CHECK OUT
          </button>
        </div>

        <Modal show={this.props.show}>
          <Modal.Header style={{
    padding:"10px" ,
    background: "#4e4949",
    color: "#fff"
}}>
            <Modal.Title   >Sale</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 style={{    fontsize: "25px;"
}}> Walk-in Customer </h1>
            <p>2 item </p>
            <h4 >MYR 20.0 </h4>
            PaymentMethod:
            <select>
              <option value="Cash">Cash</option>
              <option value="Paypal">Paypal</option>
            </select>
<label style={{float:"left",width:"100%"}}>Paid</label>
<p style={{float: "left",
              width:"100%", padding:"7px 10px",border: "1px solid #0000004d",borderradius: "5px"}}> 20.0</p>
<h3>MYR 0</h3>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              cancel
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

import React, { Component, Fragment, createRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import { toast } from "react-toastify";

export default class Cart extends Component {
constructor(props) {
  super(props)

  this.state = {
     
  }

}

  render() {
     return (
      <Fragment>
          <table className="cart-table">
          <tbody><tr><th>PRODUCT</th><th>PRICE</th><th>QUANTITY</th><th>TOTAL</th></tr>
          <tr>{this.props.cartdata.length===0?(<td colSpan="4"className="empty-cart-sec"><h1>EmptyList(SelectProduct)</h1></td>):""}</tr>     
              {this.props.cartdata.map((pr) =>{return (<tr key={pr.id}className="cart-data">
                <td><p className="cart-delete"onClick={()=>this.props.deleteproduct(pr)}>X</p><p className="pr-name">{pr.name}</p></td>
                <td>{pr.total_price}</td>
                <td><p onClick={() =>{this.props.dec(pr.id)}}className="count-inc"> - </p><p className="count-box">{pr.count}</p><p onClick={() =>this.props.IncrementItem(pr.id)}className="cout-dec" >+ </p></td>
                <td>{pr.count*pr.total_price}</td>
              </tr>
            );})}</tbody></table>

        <table className="summary-table">
          <tbody>
          <tr>
            <td>SubTotal</td>
            <td className="cart-data">
            {this.props.cartdata.reduce((a, c) => a + c.total_price * c.count, 0 )}
            </td>
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
            <td className="cart-data  total-amt" >
            {this.props.cartdata.reduce((a, c) => a + c.total_price * c.count,  0  )} MYR
            </td>
            <td className="cart-data"></td>
          </tr>
          </tbody>
         </table>
        <div className="Summary-btn-sec">
          <button className="btn btn-cancel">CANCEL</button>
        <button   className="btn  btn-checkout" disabled={this.props.cartdata.reduce((a, c) => a + c.total_price * c.count, 0 ) <50  } ref={ this.inuputref }       onClick={() => this.props.checkout()} > CHECK OUT </button>    
        </div>

        <Modal show={this.props.show}  onHide={this.props.handleClose}>
          <Modal.Header
            style={{ padding: "10px",   background: "#4e4949",   color: "#fff",  }}  >
            <Modal.Title>Sale</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 style={{ fontsize: "25px" }}> Walk-in Customer </h1>
            <p>{this.props.cartdata.length} item </p>
            <h4>MYR  {this.props.cartdata.reduce((a, c) => a + c.total_price * c.count, 0 )} </h4>
             PaymentMethod:
            <select>
              <option value="Cash">Cash</option>
              <option value="Paypal">Paypal</option>
            </select>
            <label style={{ float: "left", width: "100%" }}>Paid</label>
            <p style={{ float: "left", width: "100%", padding: "7px 10px",  border: "1px solid #0000004d",borderradius: "5px",
              }} >{this.props.cartdata.reduce((a, c) => a + c.total_price * c.count, 0 )} </p>
            <h3>MYR 0</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>close </Button>
            <Button variant="primary" onClick={this.props.handleClose}> Submit</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

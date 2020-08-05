import React from 'react';
import './App.css';
//import product  from './Components/Product/Product'
import Cart  from './Components/Cart/Cart'
import Product from './Components/Product/Product';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App container">
<div className ="row">
 


<Product/>
<ToastContainer/>

</div>


  </div>     







  );
}

export default App;

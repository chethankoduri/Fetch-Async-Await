import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let[products,setProducts] = useState([]);

let getProductsFromServer = async ()=>{

  let reqOptions = {
    method:"GET",
  };

let JSONData = await fetch("https://fakestoreapi.com/products",reqOptions);
let JSOData = await JSONData.json();
setProducts(JSOData);
console.log(JSOData);

}

  return (
    <div className="App">
    <button onClick={()=>{
      getProductsFromServer();
    }}
    >
    Get Products
    </button>
    <div className="productsContainer">
    {products.map((ele,i) => {
    return (
    <div className="productDiv">
      <h4>{ele.title}</h4>
      <img className="productPic" title ={ele.description}
      src={ele.image}
      ></img>
      <h5>₹.{ele.price}</h5>
    </div>
    );
    })}
    </div>
    </div>
  );
}

export default App;

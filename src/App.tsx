import '../src/App.css'
import Cart from './store/cart';
import { ProductList} from './store/productsList';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function ListaDeProductos() {
  return (
      <div className="App">
        <h1 className='title-productlist'>E-commerce App</h1>
          <div className='content'>
            <ProductList/>
          </div>
    </div>
  );
}

function Carrito() {
  return (
    <div className="App">
      <h1 className='title-productlist'>E-commerce App</h1>
      <div className="cart-container">
        <Cart /> 
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ListaDeProductos />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
  </Router>
  );
}

export default App;

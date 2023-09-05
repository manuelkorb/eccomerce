import './App.css'
import Cart from './store/cart'
import { ProductList } from './store/productsList'

function App() {
  return (
    <div className="App">
      <h1>E-commerce App</h1>
      <div className="ProductListContainer">
        <ProductList />
      </div>
      <div className="CartContainer">
        <Cart /> 
      </div>
    </div>
  );
}

export default App;

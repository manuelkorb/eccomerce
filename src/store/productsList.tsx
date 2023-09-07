import  {useCartStore,CartItem}  from "./carritoStore";
import { Product, initProducts } from "./products";
import { shallow } from "zustand/shallow";
import { InputNumber } from "antd";
import Cart from "./cart";
import {useState} from 'react'

type ProductProps = {
    product: Product;
}

function ProductItem({ product }: ProductProps) {
    const [quantity, setQuantity] = useState(1); 
    const { addToCart } = useCartStore(
      (state) => ({
        addToCart: state.addToCart,
      }),
      shallow
    );
  
    const handleAddToCart = () => {
      addToCart(product, quantity);
      setQuantity(1); 
    };
  
    return (
      <div className="product">
        <img className="product-img" src={product.img} alt={`Product ${product.id}`} />
        <p className="product-model">{product.model}</p>
        <p className="product-price">{product.price}$</p>
        <div>
            <p className="product-quantity">Cantidad:</p>
            <InputNumber
            min={1}
            max={10}
            value={quantity}
            defaultValue={1}
            onChange={(value) => setQuantity(value)} 
            />
        </div>
        <button className='product-button' onClick={handleAddToCart}>COMPRAR</button>
      </div>
    );
  }

export function ProductList(){
    const products = initProducts;

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    )
}
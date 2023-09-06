import  {useCartStore}  from "./carritoStore";
import { Product, initProducts } from "./products";
import { shallow } from "zustand/shallow";

type ProductProps = {
    product: Product;
}

function ProductItem({product}:ProductProps) {
    const { addToCart } = useCartStore(
        state => ({
          addToCart: state.addToCart,
        }),
        shallow,
      );

    return (
        <div className="product">
            <img className='cart-img' src={product.img} alt={`Product ${product.id}`} />
            <h2>{product.price}$</h2>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
    )
}

export function ProductList(){
    const products = initProducts;

    return (
        <div>
            {products.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    )
}
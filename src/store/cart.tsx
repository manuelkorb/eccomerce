import { useCartStore, CartItem } from './carritoStore';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div>
      <div className='cart'>
      <h2>Cart</h2>
      {cart.map((item:CartItem) => (
        <div className='cart-specs' key={item.product.id}>
          <p>Modelo: {item.product.model}</p>
          <p>Precio Unitario: ${item.product.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio Total: ${item.quantity*item.product.price}</p>
          <button className='button-remove product-button' onClick={() => removeFromCart(item.product.id)}>ELIMINAR</button>
        </div>
      ))}
      </div>
      <button className='product-button' onClick={clearCart}>VACIAR CARRITO</button>
    </div>
  );
}

export default Cart;
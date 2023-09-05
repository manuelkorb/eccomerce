import { useCartStore, CartItem } from './carritoStore';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item:CartItem) => (
        <div key={item.product.id}>
          <img src={item.product.img} alt={`Product ${item.product.id}`} />
          <p>Price: {item.product.price}$</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;
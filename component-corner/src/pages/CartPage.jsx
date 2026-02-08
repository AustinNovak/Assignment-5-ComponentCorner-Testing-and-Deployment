import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.cartId}
              item={item}
              onRemove={removeFromCart}
            />
          ))}
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
}

export default CartPage;

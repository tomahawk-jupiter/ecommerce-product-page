import styles from "./cart.module.css";
import { useState } from "react";
import CartItem from "./cartItem";

const Cart = () => {
  const [cartEmpty, setCartEmpty] = useState(false);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <div>Cart</div>
      </div>
      {cartEmpty ? (
        <div className={styles.cartBodyEmpty}>
          <div className={styles.cartBodyInner}>Your cart is empty.</div>
        </div>
      ) : (
        <div className={styles.cartBodyNotEmpty}>
          <CartItem />
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

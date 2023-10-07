import styles from "./cart.module.css";
import { useState } from "react";
import CartItem from "./cartItem";

const Cart = ({ productCount, removeItemFromCart }) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <div>Cart</div>
      </div>
      {productCount < 1 ? (
        <div className={styles.cartBodyEmpty}>
          <div className={styles.cartBodyInner}>Your cart is empty.</div>
        </div>
      ) : (
        <div className={styles.cartBodyNotEmpty}>
          <CartItem
            productCount={productCount}
            removeItemFromCart={removeItemFromCart}
          />
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

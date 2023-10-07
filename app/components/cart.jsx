import styles from "./cart.module.css";
import { useRef, useEffect } from "react";
import CartItem from "./cartItem";

const Cart = ({ productCount, removeItemFromCart, setCartOpen }) => {
  const elementRef = useRef(null);
  const trashIconRef = useRef(null);

  // useEffect to add event listener when the component mounts
  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.id == "trashIcon") {
        return;
      }
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    }

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={elementRef} className={styles.cartContainer}>
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

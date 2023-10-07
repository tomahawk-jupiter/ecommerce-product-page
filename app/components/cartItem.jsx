import styles from "./cartItem.module.css";
import Image from "next/image";

const CartItem = ({ productCount, removeItemFromCart }) => {
  return (
    <div className={styles.cartItemContainer}>
      <Image
        src="/images/image-product-1-thumbnail.jpg"
        alt="Product image"
        width={48}
        height={48}
        className={styles.cartItemImage}
      />
      <div className={styles.productDetailsContainer}>
        <div>Fall Limited Edition Sneakers</div>
        <div>
          <span className={styles.priceDetails}>$125.00 x {productCount}</span>
          <span className={styles.priceTotal}>{`$${
            125 * productCount
          }.00`}</span>
        </div>
      </div>
      <Image
        src="/images/icon-delete.svg"
        alt="Remove cart item"
        width={16}
        height={16}
        className={styles.trashIcon}
        onClick={removeItemFromCart}
        id="trashIcon"
      />
    </div>
  );
};

export default CartItem;

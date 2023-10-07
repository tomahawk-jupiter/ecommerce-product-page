import styles from "./cartItem.module.css";
import Image from "next/image";

const CartItem = () => {
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
          <span className={styles.priceDetails}>$125.00 x 3</span>
          <span className={styles.priceTotal}>$375.00</span>
        </div>
      </div>
      <Image
        src="/images/icon-delete.svg"
        alt="Remove cart item"
        width={16}
        height={16}
        className={styles.trashIcon}
      />
    </div>
  );
};

export default CartItem;

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import { useState } from "react";

const product = {
  img: "image-product-1-thumbnail.jpg",
  description: "Fall Limited Edition Sneakers",
  price: "$125.00",
  quantity: 0,
};

export default function Home() {
  const [quantityCount, setQuantityCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  const decrementCount = () => {
    if (quantityCount < 1) {
      return;
    }
    setQuantityCount(quantityCount - 1);
  };

  const addItemToCart = (quantityToAdd) => {
    setProductCount(productCount + quantityToAdd);
    setQuantityCount(0);
  };

  const removeItemFromCart = () => {
    setProductCount(0);
  };

  return (
    <>
      <Navbar
        productCount={productCount}
        removeItemFromCart={removeItemFromCart}
      />
      <main className={styles.pageContainer}>
        <div className={styles.pageColumn}>
          <Image
            src="/images/image-product-1.jpg"
            alt="product image"
            width={500}
            height={500}
            className={styles.productImage}
          />

          <div className={styles.smallImagesRow}>
            <div
              className={`${styles.imageContainer} ${styles.activeImageContainer}`}
            >
              <Image
                src="/images/image-product-1-thumbnail.jpg"
                alt="product image"
                width={100}
                height={100}
                className={`${styles.productImage} ${styles.activeImage}`}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/image-product-2-thumbnail.jpg"
                alt="product image"
                width={100}
                height={100}
                className={styles.productImage}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/image-product-3-thumbnail.jpg"
                alt="product image"
                width={100}
                height={100}
                className={styles.productImage}
              />
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/image-product-4-thumbnail.jpg"
                alt="product image"
                width={100}
                height={100}
                className={styles.productImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.pageColumn}>
          <div className={styles.productDetailsSection}>
            <div className={styles.orangeText}>SNEAKER COMPANY</div>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className={styles.priceRow}>
              <div className={styles.currentPriceContainer}>
                <h2>$125.00</h2>
                <div className={`${styles.orangeText} ${styles.savingsBadge}`}>
                  50%
                </div>
              </div>
              <div className={styles.strikeThrough}>$250.00</div>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.quantityButtonRow}>
                <button
                  className={styles.quantityThird}
                  onClick={decrementCount}
                >
                  <Image
                    src="/images/icon-minus.svg"
                    alt="minus icon"
                    width={16}
                    height={6}
                  />
                </button>
                <div className={styles.quantityThird}>{quantityCount}</div>
                <button
                  className={styles.quantityThird}
                  onClick={() => setQuantityCount(quantityCount + 1)}
                >
                  <Image
                    src="/images/icon-plus.svg"
                    alt="plus icon"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              <button
                className={styles.addToCartButton}
                onClick={() => addItemToCart(quantityCount)}
              >
                <Image
                  src="/images/icon-cart-light.svg"
                  alt="Add to shopping cart"
                  width={16}
                  height={16}
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// "use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useState } from "react";
import Menu from "./menu";
import Cart from "./cart";

const Navbar = ({ productCount, removeItemFromCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        {menuOpen && <Menu setMenuOpen={setMenuOpen} />}

        {cartOpen && (
          <Cart
            productCount={productCount}
            removeItemFromCart={removeItemFromCart}
          />
        )}

        <div className={styles.navbarLeft}>
          <Image
            src="/images/icon-menu.svg"
            alt="Open menu hamburger"
            width={24}
            height={24}
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
          />
          <Image
            src="/images/logo.svg"
            alt="sneakers logo"
            width={176}
            height={24}
            className={styles.logo}
          />

          <div className={styles.navLinksContainer}>
            <ul className={styles.navList}>
              <li>
                <a href="/">Collections</a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.navbarRight}>
          <div className={styles.cartAndBadgeContainer}>
            <Image
              src="/images/icon-cart.svg"
              alt="Open shopping cart"
              width={24}
              height={24}
              className={styles.cartIcon}
              onClick={() => setCartOpen(!cartOpen)}
            />
            <div className={styles.countBadge}>{productCount}</div>
          </div>

          <Image
            src="/images/image-avatar.png"
            alt="avatar pic"
            width={48}
            height={48}
            className={styles.avatar}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

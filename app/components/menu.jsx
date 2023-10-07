import styles from "./menu.module.css";
import Image from "next/image";

const Menu = ({ setMenuOpen }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.menuContainer}>
        <Image
          src="/images/icon-close.svg"
          alt="Close menu icon"
          width={24}
          height={24}
          onClick={() => setMenuOpen(false)}
        />

        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

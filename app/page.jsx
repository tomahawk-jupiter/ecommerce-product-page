import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
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
        <div>
          <div className={styles.orangeText}>SNEAKER COMPANY</div>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className={styles.currentPriceContainer}>
            <h2>$125.00</h2>
            <div className={`${styles.orangeText} ${styles.savingsBadge}`}>
              50%
            </div>
          </div>
          <div className={styles.strikeThrough}>$250.00</div>
          <div className={styles.buttonContainer}>
            <div className={styles.quantityButtonRow}>
              <button className={styles.quantityThird}>
                <Image
                  src="/images/icon-minus.svg"
                  alt="minus icon"
                  width={16}
                  height={6}
                />
              </button>
              <div className={styles.quantityThird}>0</div>
              <button className={styles.quantityThird}>
                <Image
                  src="/images/icon-plus.svg"
                  alt="plus icon"
                  width={16}
                  height={16}
                />
              </button>
            </div>
            <button className={styles.addToCartButton}>
              <Image
                src="/images/icon-cart-light.svg"
                alt="shopping cart"
                width={16}
                height={16}
              />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// original contents

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={100}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
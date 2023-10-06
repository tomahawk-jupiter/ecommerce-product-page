import "./globals.css";
import { Kumbh_Sans } from "next/font/google";
import Navbar from "./components/navbar";
import styles from "./layout.module.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce Product Page | Frontend mentor solution",
  description:
    "This is a solution to the E-commerce product page challenge on Frontend Mentor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <div className={styles.appContainer}>
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}

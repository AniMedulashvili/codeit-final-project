"use client"; 
import Link from "next/link";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";


function Layout({ children }) {
  const pathname = usePathname();

  return (
    <section>
<div className={styles.container}>
      <nav className={styles.nav}>
       <h1 className={styles.name}>Ani's Online Market</h1>
        <Link
          className={`
            ${styles.link}
            ${
              pathname.includes("/products")
                ? styles.activeLink
                : styles.inActiveLink
            }`}
          href="/products"
        >
          Products
        </Link>
        <Link
          className={`
            ${styles.link}
            ${
              pathname.includes("/profile")
                ? styles.activeLink
                : styles.inActiveLink
            }
            `}
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className={`
            ${styles.link}
            ${
              pathname.includes("/cart")
                ? styles.activeLink
                : styles.inActiveLink
            }
            `}
          href="/cart"
        >
          Cart
        </Link>
    </nav>
      {children}
 </div>
 <div>
        <footer className={styles.footer}>
        <p>
          © 2025 Ani's Online Market. All rights reserved. |
          <a className={styles.terms} href="/terms"> Conditions of Use</a> |
          <a href="/privacy"> Privacy Policy</a>
        </p>
      </footer>

 </div>
 </section>
  );
}

export default Layout;

"use client"; 
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import RemoveAll from "@/components/Remove All/RemoveAll.page";

function Page() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
      setCartProducts(products);
    }
    }, []);

  const handleAddOne = (product) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    products[index].count++;
  setCartProducts(products);
    localStorage.setItem("products", JSON.stringify([...products]));
  };

  const handleRemoveOne = (product) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    if (products[index].count > 1) {
      products[index].count--;
    } else {
      products.splice(index, 1);
    }
     setCartProducts(products);
    localStorage.setItem("products", JSON.stringify([...products]));
  };

  const handleRemoveAll = () => {
    localStorage.removeItem("products");
    setCartProducts([]);
  };

  const subtotal = cartProducts.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );

 const handleRemove = (id) => {
  const updatedCart = cartProducts.filter((item) => item.product.id !== id);
  setCartProducts(updatedCart);
  localStorage.setItem("products", JSON.stringify(updatedCart));
};


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.cart}>
          <div className={styles.removeAll}>
            <RemoveAll onRemove={handleRemoveAll} />
          </div>

          {cartProducts.length > 0 ? (
            cartProducts.map((prod) => (
              <div key={prod.product.id} className={styles.itemWrapper}>
                <Image
                  src={prod.product.image}
                  width={70}
                  height={70}
                  alt={prod.product.title}
                />
                <div>
                  <h4 className={styles.title}>{prod.product.title}</h4>
                  {/* <p className={styles.count}>{prod.product.description}</p> */}
                </div>
                <div className={styles.buttonWrapper}>
                  <button
                    className={styles.Remove}
                    onClick={() => handleRemoveOne(prod.product)}
                  >
                    −
                  </button>
                  <span>{prod.count}</span>
                  <button
                    className={styles.add}
                    onClick={() => handleAddOne(prod.product)}
                  >
                    +
                  </button>
                </div>
                <p className={styles.pricee}>${(prod.product.price * prod.count).toFixed(2)}</p>   
               <button className={styles.deleteItemButton} onClick={() => handleRemove(prod.product.id)}>🗑️</button>
              </div>
            ))
          ) : (
            <p className={styles.empty}>🛒 Cart is empty</p>
          )}
        </div>

        <div className={styles.summary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span className={styles.green}>Free</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className={styles.couponSection}>
            <p>Have A Coupon?</p>
            <input type="text" placeholder="Coupon Code" />
            <button className={styles.applyBtn}>Apply</button>
          </div>

          <div className={styles.totalRow}>
            <strong>Total</strong>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <button className={styles.buyBtn}>BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Page;

// 'use client'

// import styles from './page.module.css'
// import React, {useState, useEffect} from 'react'
// import Image from 'next/image';

// function Page() {
//   const [cartProducts, setCartProducts] = useState([]);

//   const getProductsFromStorage = async () => {
//     const products = await JSON.parse(localStorage.getItem("products"));
//     setCartProducts(products);
//   }

//   useEffect(() => {
//     getProductsFromStorage();
//   }, []);
  
//   const handleAddOne = async (product) => {
//     const products = await JSON.parse(localStorage.getItem("products"));
//     const index = products.findIndex((item) => item.product.id === product.id);

//     products[index].count++;

//     setCartProducts(products);
//     localStorage.setItem("products", JSON.stringify([...products]));
//   }

//   const handleRemoveOne = async (product) => {
//   }


//       console.log(cartProducts);
//   return (
//     <div className={styles.container}> 
// {cartProducts?.map((prod) => (
//   <div key={prod.id}>
//     <Image 
//     src={prod.image}
//      width={70} 
//      height={70}
//      />
//     <div>
//       <h4>{prod.count} ცალი: {prod.title}</h4>
//       <p>{prod.description}</p>
//     </div>
//   </div>
// ))}
//     </div>
//   ) 
// }
    
// export default Page;





// "use client";
// import React, { useEffect, useState } from "react";
// import styles from "./page.module.css";
// import Image from "next/image";
// import RemoveAll from "@/components/Remove All/RemoveAll.page";

// function page() {
//   const [cartProducts, setCartProducts] = useState([]);

//   const getProductsFromStorage = async () => {
//     const products = await JSON.parse(localStorage.getItem("products"));
//     setCartProducts(products);
//   };

//   useEffect(() => {
//     getProductsFromStorage();
//   }, []);

//   const handleAddOne = async (product) => {
//     const products = await JSON.parse(localStorage.getItem("products"));
//     const index = products.findIndex((item) => item.product.id === product.id);
//     products[index].count++;

//     setCartProducts(products);
//     localStorage.setItem("products", JSON.stringify([...products]));
//   };

//   const handleRemoveOne = async (product) => {
//     const products = await JSON.parse(localStorage.getItem("products"));
//     const index = products.findIndex((item) => item.product.id === product.id);
//     products[index].count--;

//     setCartProducts(products);
//     localStorage.setItem("products", JSON.stringify([...products]));
//   };

//   return (
//     <div className={styles.container}>
//      <RemoveAll />
//       {cartProducts?.map((prod) => (
//         <div key={prod.product.id} className={styles.itemWrapper}>
//           <Image
//             src={prod.product.image}
//             width={70}
//             height={70}
//             alt={prod.product.title}
//           />
//           <div>
//           <h4>{prod.count} ცალი: {prod.product.title}</h4>
//           <p className={styles.count}>{prod.product.description}</p>
//           </div>
//           <div className={styles.buttonWrapper}>
//             <button className={styles.add} onClick={() => handleAddOne(prod.product)}>add +1</button>
//             <button className={styles.Remove} onClick={() => handleRemoveOne(prod.product)}>
//               remove -1
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default page;




"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import RemoveAll from "@/components/Remove All/RemoveAll.page";

function Page() {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsFromStorage = async () => {
    const products = await JSON.parse(localStorage.getItem("products"));
    if (products) {
      setCartProducts(products);
    }
  };

  useEffect(() => {
    getProductsFromStorage();
  }, []);

  const handleAddOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex((item) => item.product.id === product.id);
    products[index].count++;

    setCartProducts(products);
    localStorage.setItem("products", JSON.stringify([...products]));
  };

  const handleRemoveOne = async (product) => {
    const products = await JSON.parse(localStorage.getItem("products"));
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

  return (
    <div className={styles.container}>
      <RemoveAll onRemove={handleRemoveAll} />

      {cartProducts?.length > 0 ? (
        cartProducts.map((prod) => (
          <div key={prod.product.id} className={styles.itemWrapper}>
            <Image
              src={prod.product.image}
              width={70}
              height={70}
              alt={prod.product.title}
            />
            <div>
              <h4>{prod.count} ცალი: {prod.product.title}</h4>
              <p className={styles.count}>{prod.product.description}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.add} onClick={() => handleAddOne(prod.product)}>add +1</button>
              <button className={styles.Remove} onClick={() => handleRemoveOne(prod.product)}>
                remove -1
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>🛒 Cart is empty</p>
      )}
    </div>
  );
}

export default Page;

// // "use client"
// // import { useRouter } from "next/navigation"
// // const RemoveAll = () => {
// //     const router = useRouter();
// //     const handleRemoveAll = () => {
// //         localStorage.removeItem("products");
// //         router.replace("/");
// //     };
// //     return <button onClick={handleRemoveAll}>Remove All</button>
// // }

// // export default RemoveAll;


// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const RemoveAll = () => {
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true); // საჭიროა რადგან localStorage მხოლოდ client-ზე არსებობს
//   }, []);

//   const handleRemoveAll = () => {
//     localStorage.removeItem("products");
//     router.refresh(); // განაახლებს გვერდს
//   };

//   if (!mounted) return null;

//   return (
//     <button onClick={handleRemoveAll}>
//       🗑️ Remove All
//     </button>
//   );
// };

// export default RemoveAll;




"use client";
import styles from "./RemoveAll.module.css"
const RemoveAll = ({ onRemove }) => {
  return (
    <button className={styles.removeButton}onClick={onRemove}>
      🗑️ Remove All from Cart
    </button>
  );
};

export default RemoveAll;

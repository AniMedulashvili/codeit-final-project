"use client"
import styles from "./BackToProducts.module.css";
import { useRouter } from "next/navigation";

const BackToProducts = () => {
    const router = useRouter();
    const handleBackToProducts = () => {
        router.replace("/products");
    };
    return <button className={styles.BackToProducts} onClick={handleBackToProducts}>👈Back</button>
}

export default BackToProducts;
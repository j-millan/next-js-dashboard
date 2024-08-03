import { CartCounter } from "@/shopping-cart";
import styles from "./page.module.css";

const ShoppingCart = () => {
  return (
    <>
      <p className={styles.title}>Shopping cart items:</p>
      <CartCounter initialItems={4}/>
    </>
  );
};

export default ShoppingCart;

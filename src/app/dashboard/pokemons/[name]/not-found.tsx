import Link from "next/link";
import styles from "./page.module.css";

const NotFoundPokemon = () => {
  return (
    <>
      <p className={styles.errorTitle}>
        {"An error has ocurred when fetching the Pokémon!"}
      </p>
      <div className={styles.status}>
        <span className={styles["status-code"]}>404</span>
        <span className={styles["status-text"]}>Not Found</span>
      </div>
      <Link href={"/dashboard/pokemons"} className={styles.back}>{'< Back to Pokémons'}</Link>
    </>
  );
};

export default NotFoundPokemon;

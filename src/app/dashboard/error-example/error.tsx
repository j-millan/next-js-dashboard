'use client';

import { NextError } from "@/shared/interfaces";
import styles from "./page.module.css";

const PokemonsError = ({ error, reset }: NextError) => {
  console.debug(error);
  
  return (
    <>
      <p className={styles.errorTitle}>{'An error has ocurred when trying to load the page!'}</p>
      <div className={styles.status}>
        <span className={styles["status-code"]}>500</span>
        <span className={styles["status-text"]}>Internal Server Error</span>
      </div>
      <button onClick={reset} className={styles["try-again"]}>Try again</button>
    </>
  );
};

export default PokemonsError;

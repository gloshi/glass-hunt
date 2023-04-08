import React from "react";
import styles from "../styles/Cabins.module.css";

const Cabins = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          <h1>The Cabins</h1>
        </div>
        <div className={styles.info}>
          <span>
            Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, are
            designed by architect Sigurd Larsen. They all have an open space
            with a double bed, a double sofa bed, kitchen, separate toilet and
            an outdoor shower. On the roof, surrounded by treetops, there is a
            terrace, which is about nine meters above ground. The cottages are
            built around tall, old trees that go through the entire cottage from
            floor to ceiling.
          </span>
          <h4>Read More</h4>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/img/cabins.png" alt="cabins" />
      </div>
    </div>
  );
};

export default Cabins;

import React from "react";
import styles from "../styles/Forest.module.css";
import RenderMap from "./Map/Map";

const Forest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <RenderMap />
      </div>
      <div className={styles.right}>
        <h1>The Forest</h1>
        <span>
          Løvtags three exclusive and comfortable cabins, Et, Ro and Ly, are
          designed by architect Sigurd Larsen. They all have an open space with
          a double bed, a double sofa bed, kitchen, separate toilet and an
          outdoor shower. On the roof, surrounded by treetops, there is a
          terrace, which is about nine meters above ground. The cottages are
          built around tall, old trees that go through the entire cottage from
          floor to ceiling.
        </span>
        <h3>Read More</h3>
      </div>
    </div>
  );
};

export default Forest;

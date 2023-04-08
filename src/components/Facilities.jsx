import React from "react";
import styles from "../styles/Facilities.module.css";
import { Link } from "react-router-dom";
import { ROUTE } from "../utils/routes";
const Facilities = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Facilities</div>
        <div className={styles.grid}>
          <div className={styles.info}>
            <img src="/img/fridge.svg" alt="fridge" />
            <span>Mini fridge</span>
          </div>
          <div className={styles.info}>
            <img src="/img/kitchen.svg" alt="fridge" />
            <span>Kitchenette</span>
          </div>
          <div className={styles.info}>
            <img src="/img/coffee.svg" alt="fridge" />
            <span>Coffee</span>
          </div>
          <div className={styles.info}>
            <img src="/img/electric.svg" alt="fridge" />
            <span>Electric tea kettle</span>
          </div>
          <div className={styles.info}>
            <img src="/img/trees.svg" alt="fridge" />
            <span>Breathtaking views</span>
          </div>
          <div className={styles.info}>
            <img src="/img/temperature.svg" alt="fridge" />
            <span>Floor heating</span>
          </div>
          <div className={styles.info}>
            <img src="/img/plug.svg" alt="fridge" />
            <span>230V</span>
          </div>
          <div className={styles.info}>
            <img src="/img/park.svg" alt="fridge" />
            <span>Parking</span>
          </div>
          <div className={styles.info}>
            <img src="/img/wifi.svg" alt="fridge" />
            <span>WIFI</span>
          </div>
          <div className={styles.info}>
            <img src="/img/shower.svg" alt="fridge" />
            <span>Shower</span>
          </div>
          <div className={styles.info}>
            <img src="/img/toilet.svg" alt="fridge" />
            <span>Flushing toilets</span>
          </div>
          <div className={styles.info}>
            <img src="/img/towels 1.svg" alt="fridge" />
            <span>Bedding & towels</span>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <img src="/img/cabins1.png" alt="" />
        <img src="/img/cabins2.png" alt="" />
        <Link to={ROUTE.ABOUT}>
        <div className={styles.textAbout}>
          More about us
        </div>
        </Link>
      </div>
      <div className={styles.withUs}>
    <div className={styles.left}>
      <h1>Stay in touch with us</h1>
      <span> Vesterborg, Denmark</span>
      <span>+123 456 789 000</span>
      <span>info@theglasshuts.com</span>
      <div className={styles.icons}>
          <img src="/img/inst.svg" alt="inst" />
          <img src="/img/facebook.svg" alt="facebook" />
          <img src="/img/twitter.svg" alt="twitter" />
      </div>
    </div>
    <div className={styles.right}>
        <img src="/img/Glass-Lodge.png" alt="Lodge" />
        <div className={styles.price}>
            <button>Book a hut</button>
            <div className={styles.text}>
                <div>from</div>
                <span>€3.200</span>
                <div style={{paddingLeft: 40}} >per night</div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Facilities;

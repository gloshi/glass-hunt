import React, { useState } from "react";
import styles from "../styles/FAQ.module.css";

const FAQ = () => {

  const [open,setOpen] = useState({
    prices: true,
    walkUp: false,
    capacity: false,
    pets: false,
    check: false,
  })

  console.log(open.prices)

  return (
    <div className={styles.container}>
      <div className={styles.Box}>
        PRICES
        <img onClick={()=>setOpen(open => ({...open, prices: !open.prices}))} src="/img/arrowFaq.svg" alt="arrowFaq" />
      </div>
      {open.prices ? (
        <div className={styles.info}>
          <h1>CANCELLATION POLICY</h1>
          <span>
            Cancellation four weeks prior = 100% refund Cancellation two weeks
            prior = 50% refund Cancellation later than two weeks = full payment
          </span>
        </div>
      ) : (
        ""
      )}
      <div className={styles.Box}>
      THE WALK UP TO GLASS HUT
        <img onClick={()=>setOpen(open => ({...open, walkUp: !open.walkUp}))} src="/img/arrowFaq.svg" alt="arrowFaq" />
      </div>
      {open.walkUp ? (
        <div className={styles.info}>
          <h1>CANCELLATION POLICY</h1>
          <span>
            Cancellation four weeks prior = 100% refund Cancellation two weeks
            prior = 50% refund Cancellation later than two weeks = full payment
          </span>
        </div>
      ) : (
        ""
      )}
       <div className={styles.Box}>
       CAPACITY
        <img  onClick={()=>setOpen(open => ({...open, capacity: !open.capacity}))} src="/img/arrowFaq.svg" alt="arrowFaq" />
      </div>
      {open.capacity ? (
        <div className={styles.info}>
          <h1>CANCELLATION POLICY</h1>
          <span>
            Cancellation four weeks prior = 100% refund Cancellation two weeks
            prior = 50% refund Cancellation later than two weeks = full payment
          </span>
        </div>
      ) : (
        ""
      )}
      <div className={styles.Box}>
      PETS
        <img onClick={()=>setOpen(open => ({...open, pets: !open.pets}))} src="/img/arrowFaq.svg" alt="arrowFaq" />
      </div>
      {open.pets ? (
        <div className={styles.info}>
          <h1>CANCELLATION POLICY</h1>
          <span>
            Cancellation four weeks prior = 100% refund Cancellation two weeks
            prior = 50% refund Cancellation later than two weeks = full payment
          </span>
        </div>
      ) : (
        ""
      )}
       <div className={styles.Box}>
       CHECK-IN / CHECK-OUT
        <img onClick={()=>setOpen(open => ({...open, check: !open.check}))} src="/img/arrowFaq.svg" alt="arrowFaq" />
      </div>
      {open.check ? (
        <div className={styles.info}>
          <h1>CANCELLATION POLICY</h1>
          <span>
            Cancellation four weeks prior = 100% refund Cancellation two weeks
            prior = 50% refund Cancellation later than two weeks = full payment
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FAQ;

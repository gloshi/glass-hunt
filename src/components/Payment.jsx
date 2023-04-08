import React from 'react'
import styles from "../styles/Payment.module.css";
import { useSelector } from 'react-redux';

const Payment = () => {
  const count = useSelector((state) => state.booking.count);
  const dinner = useSelector((state) => state.booking.dinner);
  const totalPrice =  useSelector((state) => state.booking.totalPrice);

  const firstDate = useSelector((state) => state.booking.firstDate);
  const secondDate = useSelector((state) => state.booking.secondDate);

  let d1 = '13.04.2023'
  let d2 = "04.04.2023"

  console.log(d2-d1)

  return (
    <div className={styles.container}>

    <div className={styles.info}>
      <h1>Personal Information</h1>
      <div className={styles.inputsGrip}>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="text" placeholder='Email' />
          <input type="number" placeholder='Phone number' />
          <input type="text" placeholder='Address' />
          <input type="text" placeholder='Postal code' />
          <input type="text" placeholder='City' />
          <input type="text" placeholder='country' />
      </div>
      <h1>Pay with</h1>
      <div className={styles.inputPay}>
          <input type="text" placeholder='Credit or debit card' />
          <input type="text" placeholder='Card number' />
      </div>
      <div className={styles.inputPayInfo}>
          <input type="text" placeholder='Expiration' />
          <input type="text" placeholder='CCV' />
          <input type="text" placeholder='ZIP code ' />
          <input type="text" placeholder='Country' />
      </div>
      <button>confirm and pay</button>
    </div>

            <div className={styles.total}>
            <span>The Glass Hut</span>

          <div className={styles.checkSettings}>
            <div className={styles.checkIn}>
              <div>Check in </div>
              <div>{firstDate}</div>
            </div>
            <div className={styles.checkOut}>
              <div>Check out</div>
              <div>{secondDate}</div>
            </div>
            <div className={styles.guests}>
              Guests
              <div className={styles.guestsBtns}>
                <div
                  
                  className={styles.minus}
                >
                  -
                </div>
                <div className={styles.number}>{count}</div>
                <div
                 
                  className={styles.plus}
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bookBtn}>
          </div>
          <div className={styles.pricesInfo}>
            <div className={styles.priceNight}>
              <div>{dinner?.map(el => <div>{el.title} </div>)}</div>
              <div>{dinner?.map(el => <div>{el.price} </div>)}kr</div>
            </div>
            <div className={styles.priceDinner}>
            <div>booking from {firstDate} to {secondDate} date</div>
              <div>3200kr/per night </div>
            </div>
            <div className={styles.discount}>
              <div>10% discount</div>
              <div>-200kr</div>
            </div>
          </div>

          <div className={styles.totalPrice}>
            <div>Total</div>
            <div>{totalPrice} kr</div>
          </div>
        </div>
    </div>
  )
}

export default Payment
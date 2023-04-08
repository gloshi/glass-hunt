import React, { useState } from "react";
import styles from "../../styles/Booking.module.css";
import "react-calendar/dist/Calendar.css";

import dayjs from "dayjs";
import Calendar from "../Calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getFirstDate, getSecondDate, increment, paramsCard,price } from "../../redux/booking/bookingSlice";
import { Link } from "react-router-dom";
import { ROUTE } from "../../utils/routes";
import { card } from "../../utils/data";


const Booking = () => {
  const date = new Date();
  const dateFn = (dateSecs) => {
    if (dateSecs < 0) return;
    let day = dateSecs.getDate();
    let month = dateSecs.getMonth() + 1;
    let year = dateSecs.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    return currentDate;
  };
  const [value, setValue] = React.useState(null);
  const [firstValue, setFirstValue] = React.useState(dayjs(dateFn(date)));
  const [onCard, setOnCard] = useState(false)
  const [items,setItems] = useState(card)
  const [arr, setArr] = useState([])
  const [arr2,setArr2] = useState([])
  



  const count = useSelector((state) => state.booking.count);
  const dispatch = useDispatch();

  const formatDateFirst = new Intl.DateTimeFormat("ru-RU").format(
    firstValue.$d
  );
  const formatDateSecond = value
    ? new Intl.DateTimeFormat("ru-RU").format(value.$d)
    : "Add dates";

  const perNight = value
    ? (value.$d.getTime() - firstValue.$d.getTime()) / (1000 * 60 * 60 * 24)
    : "0";

    const onAddToCard = (i) => {
      setArr(card.filter(el => el.id === i && i !== 4))

      setArr2(card.filter(el => el.id === 4))
      setOnCard(!onCard)
      
    }
    let totalPrice =  ((3200 * perNight) + (arr.length === 0? 0  : arr[0].price) * count ) * 0.9

    const clickBook = () => {
      dispatch(paramsCard(arr))
      dispatch(price(totalPrice))
      dispatch(getFirstDate(formatDateFirst))
      dispatch(getSecondDate(formatDateSecond))
    }

  return (
    <div className={styles.container}>
      <div className={styles.BookingImg}>
        <img src="/img/Booking.png" alt="Booking" />
      </div>
      <div className={styles.BookingText}>
        <h1>Booking</h1>
      </div>
      {true ? (
        <div className={styles.date}>
          <Calendar setFirstValue={setFirstValue} setValue={setValue} />
        </div>
      ) : (
        ""
      )}

      <div className={styles.services}>
      <div className={styles.options}>
      <h1>Choose Additional Services</h1>
        
          {items.map((el,index) =>  
            <div key={el.id}>
            <div className={styles.box}>
            <div className={styles.boxSettings}>
              <img
                onClick={()=>onAddToCard(index)}
                src={true ? "/img/plus.svg" : "/img/done.svg"}
                alt="arrowFaq"
              />
              <div className={styles.title}>{el.title}</div>
              <p>{el.price}kr</p>
            </div>
            <div>
              <img

                style={{ paddingRight: 15, cursor: "pointer" }}
                src={onCard? "/img/arrowDown.svg" : "/img/arrowUp.svg"}
                alt="arrowFaq"
              />
            </div>
          </div>
          {true ? (
            <div className={styles.info}>
              <h2>{el.descTitle}</h2>
              <span>
               {el.desc}
              </span>
            </div>
          ) : (
            ""
          )}
          </div>)}
        
          
          {/* <div className={styles.box}>
            <div className={styles.boxSettings}>
              <img
                onClick={()=> setChecked(checked => ({...checked, BreakfastOne: !checked.BreakfastOne}))}
                src={!checked.BreakfastOne ? "/img/plus.svg" : "/img/done.svg"}
                alt="arrowFaq"
              />
              <div className={styles.title}>Fresh Breakfast for one</div>
              <p>400kr</p>
            </div>
            <div>
              <img
                onClick={()=> setInfo(info => ({...info, BreakfastOne: !info.BreakfastOne}))}
                style={{ paddingRight: 15, cursor: "pointer" }}
                src={!info.BreakfastOne ? "/img/arrowDown.svg" : "/img/arrowUp.svg"}
                alt="arrowFaq"
              />
            </div>
          </div>
          {info.BreakfastOne ? (
            <div className={styles.info}>
              <h2>Classic Dinner</h2>
              <span>
                Bread, Coffee, milk, juice, and a selection of spreads +
                toppings.
              </span>
            </div>
          ) : (
            ""
          )}
          <div className={styles.box}>
            <div className={styles.boxSettings}>
              <img
                onClick={()=> setChecked(checked => ({...checked, BreakfastTwo: !checked.BreakfastTwo}))}
                src={!checked.BreakfastTwo? "/img/plus.svg" : "/img/done.svg"}
                alt="arrowFaq"
              />
              <div className={styles.title}>Fresh Breakfast for two</div>
              <p>500kr</p>
            </div>
            <div>
              <img
              onClick={()=> setInfo(info => ({...info, BreakfastTwo: !info.BreakfastTwo}))}
                src={!info.BreakfastTwo? "/img/arrowDown.svg" : "/img/arrowUp.svg"}
                style={{ paddingRight: 15, cursor: "pointer" }}
                alt="arrowFaq"
              />
            </div>
          </div>
          {info.BreakfastTwo ? (
            <div className={styles.info}>
              <h2>Classic Dinner</h2>
              <span>
                Bread, Coffee, milk, juice, and a selection of spreads +
                toppings.
              </span>
            </div>
          ) : (
            ""
          )}
          <div className={styles.box}>
            <div className={styles.boxSettings}>
              <img
                onClick={()=> setChecked(checked => ({...checked, DinnerOne: !checked.DinnerOne}))}
                src={checked.DinnerOne? "/img/plus.svg" : "/img/done.svg"}
                alt="arrowFaq"
              />
              <div className={styles.title}>Classic Dinner for one</div>
              <p>600kr</p>
            </div>
            <div>
              <img
                style={{ paddingRight: 15, cursor: "pointer" }}
                onClick={()=> setInfo(info => ({...info, DinnerOne: !info.DinnerOne}))}
                src={info.DinnerOne? "/img/arrowDown.svg" : "/img/arrowUp.svg"}
                alt="arrowFaq"
              />
            </div>
          </div>
          {!info.DinnerOne ? (
            <div className={styles.info}>
              <h2>Classic Dinner</h2>
              <span>
                Bread, Coffee, milk, juice, and a selection of spreads +
                toppings.
              </span>
            </div>
          ) : (
            ""
          )}
          <div className={styles.box}>
            <div className={styles.boxSettings}>
              <img
                onClick={()=> setChecked(checked => ({...checked, DinnerTwo: !checked.DinnerTwo}))}
                src={!checked.DinnerTwo? "/img/plus.svg" : "/img/done.svg"}
                alt="arrowFaq"
              />
              <div className={styles.title}>Classic Dinner for two</div>
              <p>800kr</p>
            </div>
            <div>
              <img
                style={{ paddingRight: 15, cursor: "pointer" }}
                onClick={()=> setInfo(info => ({...info, DinnerTwo: !info.DinnerTwo}))}
                src={!info.DinnerTwo? "/img/arrowDown.svg" : "/img/arrowUp.svg"}
                alt="arrowFaq"
              />
            </div>
          </div>
          {info.DinnerTwo ? (
            <div className={styles.info}>
              <h2>Classic Dinner</h2>
              <span>
                Bread, Coffee, milk, juice, and a selection of spreads +
                toppings.
              </span>
            </div>
          ) : (
            ""
          )}
          <div className={styles.box}>
            <div className={styles.boxSettings}>
              <img
                onClick={()=> setChecked(checked => ({...checked, Car: !checked.Car}))}
                src={!checked.Car? "/img/plus.svg" : "/img/done.svg"}
                alt="arrowFaq"
              />
              <div className={styles.title}>Electric Car Charge</div>
              <p>800kr</p>
            </div>
            <div>
              <img
                style={{ paddingRight: 15, cursor: "pointer" }}
                onClick={()=> setInfo(info => ({...info, Car: !info.Car}))}
                src={!info.Car? "/img/arrowDown.svg" : "/img/arrowUp.svg"}
                alt="arrowFaq"
              />
            </div>
          </div>
          {info.Car ? (
            <div className={styles.info}>
              <h2>Classic Dinner</h2>
              <span>
                Bread, Coffee, milk, juice, and a selection of spreads +
                toppings.
              </span>
            </div>
          ) : (
            ""
          )}
          */}
        </div> 
        <div className={styles.total}>
          <div className={styles.night}>3.200kr/ night</div>
          <div className={styles.checkSettings}>
            <div className={styles.checkIn}>
              <div>Check in </div>
              <div>{formatDateFirst}</div>
            </div>
            <div className={styles.checkOut}>
              <div>Check out</div>
              <div>{formatDateSecond}</div>
            </div>
            <div className={styles.guests}>
              Guests
              <div className={styles.guestsBtns}>
                <div
                  onClick={() => dispatch(decrement())}
                  className={styles.minus}
                >
                  -
                </div>
                <div className={styles.number}>{count}</div>
                <div
                  onClick={() => dispatch(increment())}
                  className={styles.plus}
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bookBtn}>
            <Link to={ROUTE.PAYMENT}>
              <button onClick={()=> clickBook()}>Book</button>
            </Link>
          </div>
          <div className={styles.pricesInfo}>
            <div className={styles.priceNight}>
              <div>3.200kr x {perNight} nights</div>
              <div>{3200 * perNight} kr</div>
            </div>
            <div className={styles.priceDinner}>
              <div>{arr.length === 0 ? "Classic Dinner for one" : arr[0].title}</div>
              <div>{arr.length === 0 ? "500" : arr[0].price}kr</div>
            </div>
            <div className={styles.discount}>
              <div>10% discount</div>
              <div>-200kr</div>
            </div>
          </div>

          <div className={styles.totalPrice}>
            <div>Total</div>
            <div>{(((3200 * perNight) + (arr.length === 0? 0  : arr[0].price) * count ) * 0.9)} kr</div>
          </div>
          <div className={styles.Coupon}>
            <form>
              <input type="text" placeholder="Coupon Code" />
              <div>apply</div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.rules}>
        <div>Hut rules</div>
        <span>
          Check-in: 2:00 PM - 11:00 PM <br /> Checkout: 11:00 AM <br /> Not
          suitable for children and infants <br />
          No smoking <br /> No pets
        </span>
      </div>
      <div className={styles.policy}>
        <div>Cancellation policy</div>
        <span>
          Free cancellation until 1:00 PM on Mar 27 After that, cancel before
          2:00 PM on Apr 1 and get a 50% refund, minus the first night and
          service fee.
        </span>
      </div>
      <div className={styles.information}>
        <div>Important Information</div>
        <span>
          You need to hike a steep hill to arrive at the treehouses, it takes
          approx 20-30 minutes on a trail with stairs and uneven ground.
        </span>
      </div>
    </div>
  );
};

export default Booking;

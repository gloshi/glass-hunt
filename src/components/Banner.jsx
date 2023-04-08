import React from 'react'
import styles from '../styles/Banner.module.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from './Calendar/Calendar';

import dayjs from "dayjs";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/booking/bookingSlice';
import { Link } from 'react-router-dom';
import { ROUTE } from '../utils/routes';


const Banner = () => {
    const date = new Date();
    const booking = useSelector((state) => state.booking.value)
    const count = useSelector((state) => state.booking.count)
    const dispatch = useDispatch()
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
  
    console.log(firstValue.$d.toString())

    const formatDateFirst = new Intl.DateTimeFormat('ru-RU').format(firstValue.$d)
    const formatDateSecond = value? new Intl.DateTimeFormat('ru-RU').format(value.$d) : 'Add dates'

  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <img src="/img/mainHouse.png" alt="house3" />
        </div>
        <div className={styles.text}>
            <h1>Find peace in the Forest</h1>
            <p>Come and stay in out hut hotel near Mariager Fjord in Denmark</p>
        </div>
        <div className={styles.btn}>
            <button  >Book Now</button>
            <div className={styles.price}>
                <p>from</p>
                <span>€3.200</span>
                <p style={{paddingLeft: 41}} >per night</p>
            </div>
        </div>
       {
          <div className={styles.calendar}>
        <div className={styles.params}>
            <div className={styles.dates}>
            <div  className={styles.checkIn}>
            Check in <br />
                {formatDateFirst}
            </div>
            <div className={styles.checkOut}>
            Check out <br />
            {formatDateSecond}
            </div>
            <div className={styles.guests}>
            Guests
            <div onClick={()=> dispatch(decrement())} style={{cursor:"pointer"}} className={styles.minus}>-</div>
            <div className={styles.number}>{count}</div>
            <div onClick={()=> dispatch(increment())} style={{cursor:"pointer"}} className={styles.plus}>+</div>


            </div>
            </div>
            <Link to={ROUTE.PAYMENT}>
            <div  className={styles.calendarBtn}>Book</div>
            </Link>
        </div>
       
        <div className={styles.months}>
        <div>
          {
            booking? <Calendar firstValue={firstValue} setFirstValue={setFirstValue}  value={value} setValue={setValue} /> : ''

          }
           
        </div>
        </div>
    </div> 
       }
    </div>
  )
}

export default Banner
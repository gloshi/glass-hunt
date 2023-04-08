import React from "react";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { ROUTE } from "../utils/routes";
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../redux/booking/bookingSlice';
const Header = () => {

  const booking = useSelector((state) => state.booking.value)
    const dispatch = useDispatch()
    

  return (
    <div className={styles.container}>
      <Link to={ROUTE.HOME}>
        <div className={styles.logo}>
          <img src="/img/logo.svg" alt="logo" />
        </div>
      </Link>
      <div className={styles.info}>
        <Link to={ROUTE.HOME}>
          <span>Home</span>
        </Link>
        <Link to={ROUTE.BOOKING}>
        <span>booking</span>
        </Link>
        <Link  to={ROUTE.AREA}>
        <span>The area</span>
        </Link>
        <Link to={ROUTE.ABOUT}>
          <span>about us</span>
        </Link>
        <Link to={ROUTE.FAQ}>
        <span>faq</span>
        </Link>
        <img src="/img/denmark.svg" alt="denmark" />
      </div>
      <div className={styles.Book}>
        <button onClick={()=>dispatch(open(!booking))}>Book Now</button>
      </div>
    </div>
  );
};

export default Header;

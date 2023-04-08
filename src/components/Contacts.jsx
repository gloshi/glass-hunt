import React, { useState } from "react";
import styles from "../styles/Contacts.module.css";
import { Link } from "react-router-dom";
import { ROUTE } from "../utils/routes";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Contacts = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [formSend, setFormSend] = useState(false);

  const [send, setSend] = useState({
    firstName: "",
    secondName: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(send);

  const fullInput = (firstName, secondName,email, subject, message) => {
    if(!firstName|| !secondName ||!subject || !email ||!message ){
      setError(true)
    }
      setSend({
        firstName: firstName,
        secondName: secondName,
        email: email,
        subject: subject,
        message: message,
      });
      setFormSend(true);
      setTimeout(() => {
        setFormSend(false);
      }, 2000);
      setFirstName('')
      setSecondName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setError(false)
  };

  const windowScroll = () => {
    window.scrollTo(2200, 2200);
  };
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.aboutUsImg}>
        <img src="/img/aboutUs.png" alt="" />
      </div>
      <div className={styles.aboutUsText}>
        <h2>About Us</h2>
        <div className={styles.aboutUsbtn}>
          <button className={styles.btnContact} onClick={() => windowScroll()}>
            contact us
          </button>
          <Link to={ROUTE.FAQ}>
            <button className={styles.btnFaq}>read FAQ</button>
          </Link>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <img src="/img/way.png" alt="" />
        </div>
        <div className={styles.right}>
          <div>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </div>
          <span>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </span>
        </div>
      </div>
      <div className={styles.title}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing...</h1>
      </div>
      <div className={styles.upImagesBlock}>
        <img
          className={styles.upImagesBlock1}
          src="/img/PanoramicGlass.png"
          alt="PanoramicGlass"
        />
        <img
          className={styles.upImagesBlock2}
          src="/img/mountain.png"
          alt="mountain"
        />
      </div>
      <div className={styles.downImagesBlock}>
        <img src="/img/PanoramicGlass2.png" alt="PanoramicGlass2" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <img src="/img/PanoramaGlass3.png" alt="PanoramicGlass3" />
      </div>
      {error ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Ошибка — <strong>Заполните все поля!</strong>
          </Alert>{" "}
        </Stack>
      ) : (
        ""
      )}

      {formSend ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          {" "}
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Успех — <strong>Ваши данные отправленны!</strong>
          </Alert>{" "}
        </Stack>
      ) : (
        ""
      )}

      <div className={styles.contactForm}>
        <div className={styles.contact}>
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

        <form onSubmit={submit}>
          <div className={styles.inputForm}>
            <div className={styles.firstInputs}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <div className={styles.inputs}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
              />
            </div>
            <div className={styles.inputMessage}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
              />
            </div>
            <div className={styles.formBtn}>
              <button
                onClick={() =>
                  fullInput(firstName, secondName, subject, message)
                }
              >
                send
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.withLove}>
        <img src="/img/with love.svg" alt="with love" />
      </div>
    </div>
  );
};

export default Contacts;

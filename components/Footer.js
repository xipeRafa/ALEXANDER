import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>

      <div className={style.cardL}>
        <h1 className={style.title}>FREEDIVING COMPANY</h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
        A L E X A N D E R (@alexander.delahoya) • Fotos y videos de Instagram
        </div>
        <div className={style.cardItem}>
        Alexander.freediving.co@gmail.com
          <br /> +52 33 31 40 06 26
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> The World's Best Freediving Equipment, Education and Training – Molchanovs
        </div>
        <div className={style.cardItem}>
          © 2022 
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;

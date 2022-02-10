import React from "react";
import style from "../styles/Learn.module.css";
import Image from "next/image";
import Link from "next/link";

const Learn = () => {
  return (
    <div
      className={style.learn}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/img/intro.jpg)`,
        width: "100%",
        height: "500px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className={style.learnItem}>
        <span>aprender a bucear</span>
        <h2>
          LEARN WITH <br /> FREEDIVING COMPANY
        </h2>
        <Link href="/contact">CONTACT US</Link>
      </div>
    </div>
  );
};

export default Learn;

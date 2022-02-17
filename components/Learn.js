import React, {} from "react";
import style from "../styles/Learn.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';



const Learn = () => {

  const { query } = useRouter();
console.log(query.name)

  return (
    <div
      className={style.learn}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/img/intro.jpg)`,
        width: "100%",
        height: "660px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className={style.learnItem}>
        <span>FREEDIVING EDUCATION</span>
        <h2>
          LEARN WITH <br /> FREEDIVING COMPANY
        </h2>
        <Link href="/contact">CONTACT US</Link>
      </div>
    </div>
  );
};

export default Learn;

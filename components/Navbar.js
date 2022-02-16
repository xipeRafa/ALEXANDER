import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className={style.container}>
      
      <ul className={style.list}>
        <li className={style.listItem} style={{paddingLeft:'30px'}}>
          <Link href="/">HOME</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/abouts">ABOUT US</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/freedive">FREEDIVING</Link>
        </li>
        <li className={style.logo}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/Avocado.png"}
          width="100px"
          height="50px"
          alt=""
        />
        </li> 
        <li className={style.listItem}>
          <Link href="/products/production">EXPEDITIONS</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/photography">UNDERWATER PRODUCTION  </Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACT US</Link>
        </li>
      </ul>

      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>

      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-81vw" }}>
        <li className={style.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/abouts">ABOUT US</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/freedive">FREEDIVING</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/production">EXPEDITIONS</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/photography">UNDERWATER PRODUCTION</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">CONTACT US</Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;

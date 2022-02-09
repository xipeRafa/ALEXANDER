import React from "react";
import style from "../styles/Banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={style.container}>
      <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/CoverGold.png"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
    </div>
  );
};

export default Banner;

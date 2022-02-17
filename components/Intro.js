import style from "../styles/Intro.module.css";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={style.container}>

      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/intro.jpg"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className={style.title}>
          <h1>Freediving <br />Expeditions & Production</h1>
          <h3>La Ventana, Baja California Sur</h3>
        </div>
      </div>

    </div>
  );
};

export default Intro;

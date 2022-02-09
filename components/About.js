import React from "react";
import style from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.card1}>
        <span>
          Desde el año 2013 Pranamaya ha liderado el camino de la apnea en la
          Riviera Maya.
        </span>
        <h2>Centro de apnea AIDA</h2>

        <hr />
        <p>
          Somos especialistas en Cenotes y mar quienes ponemos toda nuestra
          energía en enseñar, guiar y mostrar la belleza subacuática de la
          península de Yucatán. Pranamaya es el centro de apnea AIDA más grande
          de México y nuestra filosofía se basa en tener los estándares más
          altos en la enseñanza de la apnea.
                <br/><br/>
          info de prueba info de prueba info de prueba info de prueba info de prueba info de prueba 
          info de prueba info de prueba info de prueba info de prueba info de prueba info de prueba 
          info de prueba info de prueba info de prueba info de prueba info de prueba info de prueba 
        </p>
      </div>

      <div
        className={style.card2}
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/img/about.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></div>
    </div>
  );
};

export default About;

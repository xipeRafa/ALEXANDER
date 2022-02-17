import style from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

const Services = ({ services }) => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        
     {/*    <h1 className={style.title}>What is FreeDiving?</h1>

        <h3 className={style.what}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni asperiores voluptatem odit corporis, veritatis rerum rem consequatur quidem vitae itaque aperiam unde deleniti, laboriosam ea aliquam quasi, amet voluptates!</h3> */}

        <h1 className={style.subtitle}>FREEDIVING COURSES</h1>


        <div className={style.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`} passHref>

              <div className={style.service}>
                <div className={style.catInfo}>{service.desc}</div>
                <span className={style.cat}>{service.title}</span>
                <div className={style.media}>
                  {service.video ? (
                    <video
                      className={style.video}
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
              
            </Link>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Services;
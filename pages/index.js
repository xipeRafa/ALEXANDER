import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import About from "../components/About";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Testimonials from "../components/Testimonials";
import Learn from '../components/Learn';
import Banner from '../components/Banner';

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>FREEDIVING COMPANY</title>
        <meta name="description" content="Web Design, App Development, Content Creation Agency Near Sweden" />
      </Head>

      <Intro />
      <About />
      <Learn />

      <Services services={services} />
      <Testimonials />
      <Banner/ >
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};

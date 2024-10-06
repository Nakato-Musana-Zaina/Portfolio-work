
import Head from 'next/head';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Footer from './components/Footer';
// import './styles/globals.css';


export default function Home() {
  return (
   <main>
       <Head>
        <title>Nakato Musana Zaina - Portfolio</title>
        <meta name="description" content="Nakato Musana Zaina's personal portfolio website" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
   </main>
   
  );
}

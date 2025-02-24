
// import Head from 'next/head';
import Navbar from "./components/Navbar";
import Hero from './Hero/page';
import Skills from './Skills/page';
import Projects from "./Projects/page";
import Footer from './Footer/page';
// import './styles/globals.css';


export default function Home() {
  return (
   <main>
       {/* <Head>
        <title>Nakato Musana Zaina - Portfolio</title>
        <meta name="description" content="Nakato Musana Zaina's personal portfolio website" />
        <link rel="icon" href="/favicon.icon" />
      </Head> */}

      {/* <Navbar /> */}
      <Hero />
      <Skills />
      <Projects isDarkMode={false} />
      <Footer />
   </main>
   
  );
}

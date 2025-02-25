
// import Head from 'next/head';

import Hero from './Hero/page';
import Skills from './Skills/page';
import Projects from "./Projects/page";
import Footer from './Footer/page';



export default function Home() {
  return (
   <main>

      <Hero />
      <Skills />
      <Projects/>
      <Footer/>

   </main>
   
  );
}

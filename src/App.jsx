import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activity from './components/Activity';
import Purpose from './components/Purpose';
import Footer from './components/Footer';
import graph1 from './assets/image/graph1.png';
import graph2 from './assets/image/graph2.png';
import graph3 from './assets/image/graph3.png';
import graph4 from './assets/image/graph4.png';
import graph5 from './assets/image/graph5.png';

function App() {
  return (
    <div className="font-josef scroll-smooth">
      <Navbar />
      <Hero />
      <div className="absolute -z-10 h-auto w-44 left-0 sm:w-56 lg:w-72">
        <img src={graph2} alt="" />
      </div>
      <div className="absolute -z-10 h-auto w-44 right-0 md:w-56 lg:w-64">
        <img src={graph1} alt="" />
      </div>
      <About />
      <div className="absolute -z-10 h-auto w-52 right-0 sm:w-56 lg:w-72">
        <img src={graph3} alt="" />
      </div>
      <Activity />
      <div className="absolute -z-10 h-auto w-44 left-0 sm:w-56 md:w-72 lg:w-72">
        <img src={graph4} alt="" />
      </div>
      <Purpose />
      <Footer />
    </div>
  );
}

export default App;

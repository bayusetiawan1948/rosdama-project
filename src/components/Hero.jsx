import React from 'react';
import image2 from '../assets/image/image2.jpg';

function Hero() {
  return (
    <section>
      <div
        className="flex flex-col justify-center items-center overflow-hidden"
        id="hero"
      >
        <div className="w-full absolute z-20 font-semibold text-center">
          <p className="text-primary text-5xl lg:text-6xl">ROSDAMA</p>
          <p className="text-fourth text-sm lg:text-xl">
            Rohis Daya Utama Bekasi
          </p>
        </div>
        <div className="h-screen w-full absolute z-10 bg-black opacity-60"></div>
        <img
          src={image2}
          alt=""
          className="h-screen object-right-bottom object-cover sm:scale-[1.75]"
        />
      </div>
    </section>
  );
}

export default Hero;

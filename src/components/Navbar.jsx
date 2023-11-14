import React, { useState } from 'react';
import logo from '../assets/image/logo.png';
import { List, X } from '@phosphor-icons/react';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navAnimation, setNavAnimation] = useState('');
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      setNavAnimation(
        'bg-primary rounded-b-3xl h-[330px] w-full top-0 left-0 absolute -z-10 animate-fall'
      );
    } else {
      setNavAnimation(
        'bg-primary rounded-b-3xl h-[330px] w-full top-0 left-0 absolute -z-10 animate-up'
      );
      setTimeout(() => {
        setNavAnimation('');
      }, 700);
    }
  };

  return (
    <header className="p-4 lg:py-0 lg:px-8 z-50 lg:bg-primary absolute w-full">
      <div className={navAnimation}></div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:mx-auto max-w-7xl">
        <div className="flex flex-row justify-between items-center w-full">
          <a
            href="#hero"
            className="flex flex-row p-2 bg-fourth rounded-md gap-1 w-fit"
          >
            <img src={logo} alt="rosdama logo" className="h-8" />
            <div className="flex flex-col items-center text-xs font-semibold">
              <p>Rohis SMA</p>
              <p>Daya Utama Bekasi</p>
            </div>
          </a>
          <div className="flex justify-between items-center gap-[72px] h-24 font-bold text-base text-white hidden lg:flex">
            <a
              href="#about"
              className="p-4 group transition ease-in-out delay-150 duration-300"
            >
              Tentang Kami
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
            <a
              href="#activity"
              className="p-4 group transition ease-in-out delay-150 duration-300"
            >
              Kegiatan
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
            <a
              href="#purpose"
              className="p-4 group transition ease-in-out delay-150 duration-300"
            >
              Tujuan
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </a>
            <a
              href="#"
              className="text-base leading-7 group transition ease-in-out delay-150 duration-300"
            >
              <div className="bg-white text-black w-fit h-fit px-4 py-3 rounded-xl group-hover:bg-black group-hover:text-third transition-all duration-500">
                Bergabung Dengan Kami
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-third"></span>
              </div>
            </a>
          </div>
          <div
            className="bg-fourth w-fit p-2 rounded-md lg:hidden"
            onClick={handleNav}
          >
            {!nav ? (
              <List size={32} color="#101010" />
            ) : (
              <X size={32} color="#101010" />
            )}
          </div>
        </div>
        <div
          className={`flex flex-col justify-start items-center gap-3 w-full font-bold text-base text-white lg:hidden ${
            !nav ? 'anime-up hidden' : 'pt-10 w-full animate-fall'
          }`}
        >
          <a
            href="#about"
            className="py-2 px-3 bg-secondary rounded-lg self-start w-full"
          >
            Tentang Kami
          </a>
          <a
            href="#activity"
            className="py-2 px-3 bg-secondary rounded-lg self-start w-full"
          >
            Kegiatan
          </a>
          <a
            href="#purpose"
            className="py-2 px-3 bg-secondary rounded-lg self-start w-full"
          >
            Tujuan
          </a>
          <a href="#" className="text-base leading-7 ">
            <div className="bg-white text-black w-fit h-fit px-4 py-3 rounded-xl">
              Bergabung Dengan Kami
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

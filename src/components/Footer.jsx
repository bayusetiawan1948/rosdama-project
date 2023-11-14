import React from 'react';
import { InstagramLogo, TiktokLogo, TwitterLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className="bg-primary w-full flex justify-center">
      <div className=" h-fit p-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:py-6 max-w-7xl">
        <div>ROSDAMA - Copyright © 2023 All right reserved</div>
        <div className="flex flex-row items-start gap-2">
          <a href="#">
            <div className="bg-third h-fit w-fit rounded-full p-1">
              <InstagramLogo size={30} color="#101010" />
            </div>
          </a>
          <a href="#">
            <div className="bg-third h-fit w-fit rounded-full p-1">
              <TiktokLogo size={30} color="#101010" />
            </div>
          </a>
          <a href="#">
            <div className="bg-third h-fit w-fit rounded-full p-1">
              <TwitterLogo size={30} color="#101010" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

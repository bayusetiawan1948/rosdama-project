import React from 'react';
import image1 from '../assets/image/image1.jpg';

function About() {
  return (
    <section className="my-9 mx-4 md:my-24 md:mx-16 flex justify-center">
      <div
        className="flex flex-col justify-between gap-9 md:flex-row md:gap-20 lg:gap-32 max-w-7xl"
        id="about"
      >
        <div className="flex flex-col gap-4 md:w-4/5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl lg:text-4xl">ROSDAMA</p>
            <p className="font-light text-xs leading-6 md:text-base lg:text-xl">
              Cras convallis tellus nec quam elementum porttitor. Phasellus orci
              enim, bibendum eu massa at, bibendum congue elit. Nullam vel leo
              ut ipsum commodo facilisis vel sed dolor. Aliquam erat volutpat.
              Quisque maximus eros ac tellus pharetra commodo. Vestibulum
              posuere ut sem vel accumsan. Ut id lobortis diam. Mauris
              consectetur imperdiet est ut laoreet. Phasellus ac lacus at nulla
              congue volutpat in sed libero. Fusce accumsan vehicula ex eget
              ultricies. Ut dignissim purus suscipit tincidunt pretium. Proin
              tincidunt sapien et ipsum molestie faucibus. Curabitur non risus
              eros. Sed a nisi venenatis, semper mi at, hendrerit mauris.
            </p>
          </div>
          <a href="#" className="text-base leading-7">
            <div className="bg-primary w-fit h-fit px-4 py-3 rounded-xl text-base">
              Bergabung Dengan Kami
            </div>
          </a>
        </div>
        <div className="md:self-center">
          <img
            src={image1}
            alt=""
            className="rounded-lg aspect-square object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

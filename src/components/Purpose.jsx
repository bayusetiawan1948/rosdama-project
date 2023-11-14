import React from 'react';

function Purpose() {
  return (
    <section className="my-9 mx-4 md:my-24 md:mx-16 flex justify-center">
      <div className="flex flex-col gap-9 max-w-7xl" id="purpose">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-2xl font-semibold lg:text-4xl">Tujuan</p>
          </div>
          <div className="flex flex-col gap-4 text-xs font-light tracking-wide leading-6 md:text-base lg:text-xl">
            <p className="">ROSDAMA memiliki tujuan yaitu sebagai berikut :</p>
            <ol className="list-decimal flex flex-col gap-4 mx-3 lg:mx-5">
              <li>
                Memberikan pembelakan kepada pengurus ROHIS SMA dan SMK tentang
                manajemen pengelolaan organisasi, sehingga diliarapkan mampu
                meningkatkan kualitas serta profesionalisme dalam melaksanakan
                program ROHIS.
              </li>
              <li>
                Menumbuhkan jiwa kepemimpinan dan rasa kepedulian sosial
                terbadap realitas yang berkembang, baik dilingkungan sekolah
                maupun di masyarakat dan sistem pemerintahan di Aceh sejak dari
                rumah, gampong, mukim, kecamatan, kabupaten dan Provinsi.
              </li>
              <li>
                Meningkatkan pengetahuan, ketrampilan, kemampuan serta
                pengalaman dalam manajemen pengelolaan organisasi Rohis SMA dan
                SMK.
              </li>
              <li>
                Memberikan wawasan dan pengetahuan tentang hakikat redikalisme
                yangmengatasnamakau agama dan merumuskan langkah-langkah
                strategis untuk mencegab masuknya paaham radikal dikalangan
                pengurus dan anggota Roms SMA dan SMK.
              </li>
              <li>
                Meningkatkan komitmen, kepedulian dan kebersamaan dalam
                membangun bangsa dan negara.
              </li>
              <li>
                Mendekatkan diri kepada Al1ah Swt, taat beribadah dan memiliki
                akhlakulkarimah terhadap Kbaliq dan sosial.
              </li>
            </ol>
          </div>
        </div>
        <a href="#" className="text-base leading-7 self-center">
          <div className="bg-primary w-fit h-fit px-4 py-3 rounded-xl">
            Bergabung Dengan Kami
          </div>
        </a>
      </div>
    </section>
  );
}

export default Purpose;

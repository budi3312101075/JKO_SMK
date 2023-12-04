import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-cover h-screen w-screen flex items-center justify-center"
        style={{ backgroundImage: "url('./Motherboard.jpg')" }}
      >
        <h1 className="text-white text-3xl text-center w-[850px]">
          Kami mengutamakan kepuasan pelanggan. kami akan memberikan layanan
          yang ramah dan komunikatif dengan harga yang terjangkau
        </h1>
      </div>

      <div className="h-52 bg-blue-500 flex justify-between items-center px-32">
        <p className="text-white w-[850px] text-xl capitalize">
          selamat datang diwebsite kami
          <br /> adalah salah satu penyedia service komputer dan laptop, rakit
          komputer, <br /> install windows dekstop & server, install linux
          dekstop & server, jaringan lan, DLL. <br /> yang telah berpengalaman
          melayani klien-klien kami diseluruh kawasan batam sekitarnya.
          BERGARANSI!!!
        </p>
        <button className="bg-slate-200 w-40 h-10 rounded-lg font-semibold">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Home;

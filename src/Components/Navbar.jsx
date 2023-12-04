import React from "react";

const Navbar = () => {
  return (
    <div className="h-14 w-screen bg-black text-white flex items-center justify-between px-20 ">
      <h1 className="font-bold text-2xl">JKO</h1>
      <div className="flex gap-5 text-xs uppercase">
        <a href="">Home</a>
        <a href="">Tentang Kami</a>
        <a href="">Layanan Kami</a>
        <a href="">Informasi</a>
        <a href="">Hubungi kami</a>
      </div>
    </div>
  );
};

export default Navbar;

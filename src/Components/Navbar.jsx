import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-14 w-screen bg-black text-white flex items-center justify-between px-20 ">
      <h1 className="font-bold text-2xl">JKO</h1>
      <div className="flex gap-5 text-xs uppercase">
        <Link to="/">Home</Link>
        <Link to="/TentangKami">Tentang Kami</Link>
        <Link to="/LayananKami">Layanan Kami</Link>
        <Link>Informasi</Link>
        <Link>Hubungi kami</Link>
      </div>
    </div>
  );
};

export default Navbar;

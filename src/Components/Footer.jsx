import React from "react";

const Footer = () => {
  return (
    <div className="h-80 bg-black text-white px-16 pt-16 pb-72 flex justify-between">
      <div className="w-96">
        <h1 className="font-bold">Tentang Kami</h1>
        <p className="text-justify mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          neque iure repellat atque nihil hic fugit earum. Maxime vel vero,
          voluptatem natus molestiae aperiam dignissimos commodi, deleniti
          delectus, nesciunt expedita! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas quae fugit odit temporibus, voluptates earum
          voluptas quibusdam, incidunt id iusto, velit et hic porro atque at
          quasi nemo vel ipsam!
        </p>
      </div>
      <div>
        <h1 className="font-bold mb-3">Layanan Kami</h1>
        <p>Jasa service Komputer</p>
        <p>Jasa service Notebook & Laptop</p>
        <p>Jasa Install ulang Windows & Linux</p>
        <p>Jasa Rental Laptop & Komputer</p>
        <p>Jasa Pengadaan & perakitan komputer</p>
        <p>Jasa install jaringan LAN & Mikrotik</p>
        <p>Jasa Maintenance komputer, Laptop & Notebook</p>
      </div>
      <div>
        <h1 className="font-bold">Hubungi Kami</h1>
        <p>Jasa Komputer Online | IT Solutions</p>
        <p>Tiban koperasi no.76 </p>
        <p>Kota Batam Kepri</p>
        <p>Phone / Whatshapp: 08117001616</p>
      </div>
    </div>
  );
};

export default Footer;

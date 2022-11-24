import pcb1 from "../Asset/Pcb1.png";
import buku from "../Asset/Buku.png";
import simulasi from "../Asset/Simulasi.png";
import { Link } from "react-router-dom";

function Menu(props) {
  let nama = props.username;
  if (nama == "") {
    return <button className="btn bg-blue-700 rounded-full border-2 border-blue-700 px-6 hover:bg-white hover:border-blue-700 hover:text-blue-700">Daftar Sekarang</button>;
  } else {
    return (
      <div className="flex gap-8 flex-col lg:flex-row justify-center items-center lg:justify-start">
        <div className="card w-56 bg-base-100 shadow-xl">
          <figure className="px-10 ">
            <img src={buku} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <a href="/materi" className="btn bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 px-10 rounded-full">Materi</a>
            </div>
          </div>
        </div>
        <div className="card w-56 bg-base-100 shadow-xl">
          <figure className="px-10 ">
            <img src={simulasi} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <div className="card-actions">
              <a href="/simulasi" className="btn bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 px-9 rounded-full">Simulasi</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Hero(props) {
  let nama = props.username;
  return (
    <div className="container bg-white mx-auto my-2 py-10 px-24 rounded-xl shadow-2xl shadow-blue-500/50 flex justify-center min-h-[60vh] border-blue-100 border">
      <div className="hero-content flex-col justify-center items-center lg:flex-row-reverse">
        <img src={pcb1} className="max-w-sm lg:max-w-[495px] " />
        <div className="flex flex-col justify-center ">
          <h1 className="text-4xl font-bold text-center lg:text-left">RANGKAIAN LISTRIK 1</h1>
          <p className="py-6 text-center lg:text-left">Website ini merupakan media pembelajaran untuk mengampu mata kuliah Rangkaian Listrik 1.</p>
          <Menu username={nama} />
        </div>
      </div>
    </div>
  );
}

export default Hero;

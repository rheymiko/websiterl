import { useState } from "react";
import ReactDOM from "react-dom/client";

import rangkaian from "../Asset/Kirchoff.png";

function Data(params) {
  return;
}

function Kirchoff() {
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [r3, setR3] = useState("");
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="px-3 py-2 max-w-xl bg-white rounded-xl shadow-lg shadow-blue-500/50">
          <img src={rangkaian} alt="" />
        </div>
        <div id="inputR" className="flex flex-col justify-center items-center">
          <div className="flex gap-5 mt-10">
            <div className="flex flex-col justify-center items-center bg-white px-3 py-3 rounded-lg shadow-md shadow-blue-500/50">
              <h3 className="font-medium mb-1">R1</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Masukan Nilai" className="input input-bordered input-xs w-full max-w-xs" value={r1} onChange={(e) => setR1(e.target.value)} />
                <span>&#8486;</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white px-3 py-3 rounded-lg shadow-md shadow-blue-500/50">
              <h3 className="font-medium mb-1">R2</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Masukan Nilai" className="input input-bordered input-xs w-full max-w-xs" value={r2} onChange={(e) => setR2(e.target.value)} />
                <span>&#8486;</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white px-3 py-3 rounded-lg shadow-md shadow-blue-500/50">
              <h3 className="font-medium mb-1">R3</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Masukan Nilai" className="input input-bordered input-xs w-full max-w-xs" value={r3} onChange={(e) => setR3(e.target.value)} />
                <span>&#8486;</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <div className="flex flex-col justify-center items-center bg-white px-3 py-3 rounded-lg shadow-md shadow-blue-500/50">
              <h3 className="font-medium mb-1">V1</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Masukan Nilai" className="input input-bordered input-xs w-full max-w-xs" value={v1} onChange={(e) => setV1(e.target.value)} />
                <span>V</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white px-3 py-3 rounded-lg shadow-md shadow-blue-500/50">
              <h3 className="font-medium mb-1">V2</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Masukan Nilai" className="input input-bordered input-xs w-full max-w-xs" value={v2} onChange={(e) => setV2(e.target.value)} />
                <span>V</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button className="btn px-12 bg-blue-700 border-2 border-blue-700 text-white hover:border-blue-700 hover:bg-transparent hover:text-blue-700 rounded-full ">Kirim</button>
          </div>
        </div>
        <div id="inputI" className="flex flex-col justify-center items-center hidden">
          <div className="flex gap-5 mt-10">
            <div className="flex flex-col justify-center items-center bg-white px-3 py-3 rounded-lg shadow-md shadow-blue-500/50">
              <h3 className="font-medium mb-1">I1</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Masukan Nilai" className="input input-bordered input-xs w-full max-w-xs" value={r1} onChange={(e) => setR1(e.target.value)} />
                <span>A</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white px-3 py-3 rounded-lg shadow-md shadow-blue-500/50">
              <h3 className="font-medium mb-1">I2</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Masukan Nilai" className="input input-bordered input-xs w-full max-w-xs" value={r2} onChange={(e) => setR2(e.target.value)} />
                <span>A</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white px-3 py-3 rounded-lg shadow-md shadow-blue-500/50">
              <h3 className="font-medium mb-1">I3</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Masukan Nilai" className="input input-bordered input-xs w-full max-w-xs" value={r3} onChange={(e) => setR3(e.target.value)} />
                <span>A</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button className="btn px-12 bg-blue-700 border-2 border-blue-700 text-white hover:border-blue-700 hover:bg-transparent hover:text-blue-700 rounded-full ">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kirchoff;

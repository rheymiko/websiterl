function SidebarMateri() {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Hello
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <a className="mx-auto">Materi Rangkaian Listrik 1</a>
            </li>
            <li className="hidden">
              <a>Hukum Ohm</a>
            </li>
            <li>
              <a>Hukum Kirchoff</a>
            </li>
          </ul>
        </div>
        <div className="drawer-content ml-[25px] mt-[25px] mr-[25px]">
          <h1 className="text-3xl font-bold">Hukum Kirchoff</h1>
          <p className="text-justify ">Hukum Kirchoff merupakan aturan mengenai dua elemen yang mempunyai arus listrik dan mempunyai tegangan yang berbeda dalam suatu rangkaian listrik. Nama hukum Kirchoff diambil dari nama akhir penemu hukum tersebut yaitu Kirchoff. Hukum Kirchoff juga mempunyai nama lain yaitu hukum arus Kirchoff yang dikenal dengan KCL. Hukum Kirchoff membahas tentang rangkaian listrik. Baik itu pada rangkaian tertutup maupun rangkaian bercabang. Dalam suatu rangkaian listrik terdapat komponen yang saling berkaitan atau berhubungan satu sama lain. Jika salah satu komponen tersebut hilang, maka rangkaian tidak bisa digunakan atau dimanfaatkan. Komponen dalam rangkaian listrik mempunyai nilai atau besaran masing-masing. Untuk menghitung besaran atau nilai suatu komponen tersebut digunakan hukum Kirchoff, karena hukum tersebut mempunyai aturan dan rumus yang digunakan untuk mengatasi masalah atau menghitung arus yang masuk dan keluar dalam suatu rangkaian listrik.</p>
          <h1 className="font-bold">Bunyi Hukum Kirchoff 1</h1>
          <p>“Dalam rangkaian listrik jumlah arus listrik yang masuk dari titik percabangan sama dengan jumlah arus listrik yang keluar dari titik percabangan”.</p>
          <h1 className="font-bold">Rumus Hukum Kirchoff 1</h1>
          <p>I1 + I2 + I3 + I4 = I5 + I6 + I7 + I8</p>
          <h1 className="font-bold">Bunyi Hukum Kirchoff 2</h1>
          <p>“Jumlah tegangan atau beda potensial dalam rangkaian listrik tertutup adalah nol”.</p>
          <h1 className="font-bold">Rumus Hukum Kirchoff 2</h1>
          <p>Vab + Vbc + Vcd + Vde = 0 Atau ƩE + ƩV = 0</p>
          <p>Keterangan:</p>
          <p>V = Beda potensial atau tegangan dari komponen</p>   
          <p>E = Sumber arus listrik</p>  
        </div>
      </div>
    </div>
  );
}

export default SidebarMateri;

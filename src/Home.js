import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function Home() {
  let nama = "Budi Hartanto";
  return (
    <div className="flex mx-[45px] flex-col">
      <Navbar username={nama} />
      <Hero username={nama} />
    </div>
  );
}
export default Home;

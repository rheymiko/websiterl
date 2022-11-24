import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import unj from "../Asset/unj.png";
import tutwuri from "../Asset/tutwuri.png";
import kampusmerdeka from "../Asset/kampusmerdeka.png";
import Materi from "../Materi";

function Validasiuser(props) {
  let nama = props.name;
  if (nama == "") {
    return <a className="btn bg-transparent border-collapse border-blue-700 border-2 text-blue-700 rounded-full px-10 lg:flex hidden hover:text-white hover:bg-blue-700 hover:border-blue-700 mr-4">Login </a>;
  } else {
    return (
      <h3 className=" lg:text-xl lg:block hidden mr-4 text-blue-700">
        Halo, <span className="font-mediums">{nama}</span>
      </h3>
    );
  }
}

function Loginin(props) {
  let nama = props.name;
  if (nama == "") {
    return (
      <li>
        <button className="border-2 border-blue-500 text-blue-500 mx-auto my-4 px-16">Login</button>
      </li>
    );
  }
}

function Navbar(props) {
  let username = props.username;

  return (
    <div className="container bg-white mx-auto my-2 p-2 rounded-xl shadow-lg shadow-blue-500/50 border-blue-100 border">
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case">
            <img src={unj} alt="" className="w-12" />
          </a>
          <a className="btn btn-ghost normal-case">
            <img src={tutwuri} alt="" className="w-12" />
          </a>
          <a className="btn btn-ghost normal-case">
            <img src={kampusmerdeka} alt="" className="w-20" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-blue-700">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="/materi">Course</a>
            </li>
            <li>
              <a href="/simulasi">Simulation</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-left">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content text-lg mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Course</a>
              </li>
              <li>
                <a>Simulation</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <Loginin name={username} />
            </ul>
          </div>
          <Validasiuser name={username} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

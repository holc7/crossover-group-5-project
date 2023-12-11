import React from "react";
import logo from "../../public/assets/navbar/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="text-dark flex-inline p-2 navbar sticky-top container-fluid">
        <div className="logo navbar">
          <img src={logo} class="img-fluid" alt="company logo" />
        </div>
        <div className="d-flex flex-row navbar d-inline-flex p-2">
          <ul className="navbar d-flex flex-row list-inline gap-4">
            <li href="#Home">Home</li>
            <li href="#About">About</li>
            <li href="#Service">Service</li>
            <li href="#Contact">Contact</li>
          </ul>
        </div>
        <div className="nav-search">
          <img src="" />
          <input></input>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

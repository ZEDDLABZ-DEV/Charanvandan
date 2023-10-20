import React from "react";
import { Link } from "react-router-dom";
import klogo from '../../Assets/images/klogo2.png'
const Header = () => {
  return    <div className="flex h-[60px] px-[100px]">
  <div className="flex-1">
      <img src={klogo} alt="logo" />
  </div>
  <div className="flex-1">
      <ul className=" h-full flex justify-around items-center">
          <li> <Link to="/"> Home </Link></li>
          <li> <Link to="/services"> Services </Link> </li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/blog">Blog</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
      </ul>
  </div>
</div>;
};

export {Header};

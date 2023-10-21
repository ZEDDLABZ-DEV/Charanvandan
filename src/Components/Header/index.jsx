import React, {useState} from "react";
import { BiMenu} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'
import { Link } from "react-router-dom";
import klogo from '../../Assets/images/klogo2.png'
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

  return  <div className="flex flex-col md:flex-row h-auto md:h-[80px] px-[10px] lg:px-[100px]">
  <div className="flex-1 md:w-auto flex justify-between items-center">
      <div className="flex flex-col py-4 justify-center items-center">
      <img src={klogo} alt="logo" />
      <span className="text-[14px]">चरण वंदनं पूजाम् लभते</span>
      </div>
        {!menuOpen && <BiMenu className={`text-[30px] flex md:hidden`} onClick={() => setMenuOpen(true)} />}
        {menuOpen && <GrFormClose className={`text-[30px] flex md:hidden`} onClick={() => setMenuOpen(false)} />}
  </div>
  <div className="w-2/3">

  <ul className={`h-full ${ menuOpen ? 'flex' : 'hidden' }  gap-2 transition-transform md:hidden flex-col md:flex-row px-4`}>
          <li className="py-2 text-[16px] font-semibold"> <Link to="/"> Home </Link></li>
          <li className="py-2 font-semibold"> <Link to="/campaigns"> Campaign </Link> </li>
          <li className="py-2 font-semibold"> <Link to="/about">About</Link></li>
          <li className="py-2 font-semibold"> <Link to="/blog">Blog</Link></li>
          <li className="py-2 font-semibold"> <Link to="/contact">Contact</Link></li>
          <li> <button className="w-full mb-4 bg-primary py-2 px-6 rounded-md">Login/Signup</button></li>

      </ul>

      <ul className="h-full hidden md:flex flex-col md:flex-row justify-around items-center">
          <li> <Link to="/"> Home </Link></li>
          <li> <Link to="/campaigns"> Campaign </Link> </li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/blog">Blog</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> <button className="bg-primary py-2 px-6 rounded-md">Login/Signup</button></li>
      </ul>
  </div>
</div>;
};

export {Header};

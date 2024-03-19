import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-centern py-5 relative text-white">
      <div className="logo  md:py-2 md:px-3">
        <img src={logo} alt="site-logo" />
      </div>
      {/* Render the MdMenu based on menuOpen state */}
      {menuOpen ? (
        <MdClose className="md:hidden w-6 h-6 text-white z-50" onClick={toggleMenu} />
      ) : (
        <MdMenu className="md:hidden w-6 h-6 text-white" onClick={toggleMenu} />
      )}

      {/* Conditional rendering for the menu list */}
      {menuOpen && (
        <ul className="md:hidden absolute top-16 items-center text-white w-full z-0">
          <div className=" mt-7 container w-full h-screen text-center flex flex-col gap-10 text-[18px] sm:text-left">
            <Link><p className=" block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</p></Link>
            <Link><p>About</p></Link>
            <Link><p>Portfolio</p></Link>
            <Link><p >CV</p></Link>
          </div>
        </ul>
      )}

      {/* Navigation for desktop */}
      <nav className=" hidden md:flex gap-5 ">
        <Link className=' cursor-pointer block py-2 px-3 hover:bg-blue-700 rounded'>Home</Link>
        <Link className=' cursor-pointer block py-2 px-3 hover:bg-blue-700 rounded'>About</Link>
        <Link className=' cursor-pointer block py-2 px-3 hover:bg-blue-700 rounded'>Portfolio</Link>
        <Link className=" block py-2 px-3 hover:bg-blue-700 rounded">CV</Link>
      </nav>
    </div>
  );
};

export default Header;

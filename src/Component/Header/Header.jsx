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
    <div className="flex justify-between items-center py-5 relative text-white">
      <div className="logo ">
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
        <ul className="md:hidden absolute top-10 items-center text-white w-full z-0">
          <div className=" mt-7 container bg-black w-full min-h-screen text-center flex flex-col gap-10 text-[18px] sm:text-left">
            <Link to="/" ><p className=" block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</p></Link>
            <Link to="/About" ><p className='py-2 px-3'>About</p></Link>
            <Link to="/Portfolio" ><p className='py-2 px-3'>Portfolio</p></Link>
            <Link to="/Resume" ><p className='py-2 px-3' >CV</p></Link>
          </div>
        </ul>
      )}

      {/* Navigation for desktop */}
      <nav className=" hidden md:flex gap-5 ">
        <Link to="/" className=' cursor-pointer block py-2 px-3 hover:bg-blue-700 rounded'>Home</Link>
        <Link to="/About" className=' cursor-pointer block py-2 px-3 hover:bg-blue-700 rounded'>About</Link>
        <Link to="/Portfolio" className=' cursor-pointer block py-2 px-3 hover:bg-blue-700 rounded'>Portfolio</Link>
        <Link to="/Resume" className=" block py-2 px-3 hover:bg-blue-700 rounded">CV</Link>
      </nav>
    </div>
  );
};

export default Header;

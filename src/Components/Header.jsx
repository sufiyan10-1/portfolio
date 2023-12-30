import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10 bg-black">
      <Link to='/' className="logo text-2xl font-bold font-serif">
        Sufiyan Khan
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block ">
        <ul className="flex gap-5">
          <li>
            <Link className="hover:text-blue-600" to="/about">About</Link>
          </li>
          <li>
            <Link className="hover:text-blue-600" to="/skill">Skills</Link>
          </li>
          <li>
            <Link className="hover:text-blue-600" to="/projects">Projects</Link>
          </li>
          
          <li>
            <Link className="hover:text-blue-600" to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to="#"
              target="_blank"
              without
              rel="noreferrer"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}


      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;

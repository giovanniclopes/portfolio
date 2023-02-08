import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo2 from "../assets/logo2.png";
import { List, X } from "phosphor-react";

export function Header() {
  const [togglerNav, setTogglerNav] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  let activeStyle = {
    textDecoration: "underline",
    color: "white",
  };

  return (
    <header>
      <nav
        className={
          fix
            ? "z-50 fixed top-0 w-full flex items-center justify-between h-max py-3 px-8 mx-auto backdrop-blur-sm bg-gray-600/80 text-white border-b border-red-400 border-opacity-30 transition-all md:items-center mbl:px-4"
            : "z-50 fixed top-0 w-full flex items-center justify-between h-24 py-3 px-8 mx-auto backdrop-blur-0 bg-gray-600/20 text-white border-b-2 border-transparent transition-all md:items-center mbl:px-4"
        }
      >
        <Link to="/">
          <img
            className="mbl:w-8"
            src={Logo2}
            width={40}
            alt="Nordician Logo"
          />
        </Link>
        <div
          className={
            togglerNav
              ? "absolute left-0 top-0 w-screen mt-20 border-t border-red-400 p-6 flex items-left flex-col gap-4 text-gray-300 font-nordica text-2xl bg-gray-600 md:flex md:items-center"
              : "hidden gap-4 text-gray-300 font-nordica text-2xl md:flex md:items-center"
          }
        >
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="/mythology"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mitologia
          </NavLink>
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="/reality"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Realidade
          </NavLink>
        </div>
        <button
          className=" inline transition-all md:hidden"
          onClick={clickHandler}
        >
          {togglerNav ? <X width={27} /> : <List width={27} />}
        </button>
      </nav>
    </header>
  );
}

export default Header;

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
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
            ? "z-50 fixed top-0 w-full flex items-center justify-between h-max py-7 px-8 mx-auto bg-gray-500 text-white font-semibold transition-all md:items-center mbl:px-4"
            : "z-50 fixed top-0 w-full flex items-center justify-between h-24 py-3 px-8 mx-auto backdrop-blur-0 bg-gray-600/20 font-medium text-white/50 transition-all md:items-center mbl:px-4"
        }
      >
        {/* <Link to="/">
          <img
            className="mbl:w-8"
            src={Logo2}
            width={40}
            alt="Nordician Logo"
          />
        </Link> */}
        <div
          className={
            togglerNav
              ? "absolute left-0 top-0 w-screen mt-20 border-t border-red-500 p-6 flex items-left flex-col gap-4 text-gray-300 font-nordica text-2xl bg-gray-600 md:flex md:items-center"
              : "hidden gap-4 text-lg md:flex md:items-center"
          }
        >
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="#about-me"
          >
            Sobre mim
          </NavLink>
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="#skills"
          >
            Skills
          </NavLink>
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="#projects"
          >
            Projetos
          </NavLink>
          <NavLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            to="#contact"
          >
            Contato
          </NavLink>
        </div>
        <button
          className=" inline transition-all md:hidden"
          onClick={clickHandler}
        >
          {togglerNav ? (
            <X width={28} height={28} />
          ) : (
            <List width={28} height={28} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;

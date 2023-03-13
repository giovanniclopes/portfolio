import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  List,
  X,
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
} from "phosphor-react";

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
            ? "z-50 flex items-center justify-between fixed top-0 w-full h-max py-7 px-8 mx-auto bg-gray-500 text-white text-sm font-semibold transition-all md:items-center mbl:px-4"
            : "z-50 flex items-center justify-between fixed top-0 w-full h-24 py-3 px-10 mx-auto backdrop-blur-0 bg-gray-600/20 text-sm font-medium text-white/50 transition-all md:items-center mbl:px-4"
        }
      >
        <div
          className={
            togglerNav
              ? "absolute left-0 top-0 w-screen mt-20 border-t border-red-500 p-6 flex items-left flex-col gap-4 text-gray-300 text-lg bg-gray-600 md:flex md:items-center"
              : "hidden gap-4 md:flex md:items-center"
          }
        >
          <NavLink
            className="transition-all hover:text-gray-50"
            onClick={clickHandler}
            to="#about"
          >
            Sobre mim
          </NavLink>
          <Link
            className="transition-all hover:text-gray-50"
            onClick={clickHandler}
            to="#skills"
          >
            Skills
          </Link>
          <NavLink
            className="transition-all hover:text-gray-50"
            onClick={clickHandler}
            to="#projects"
          >
            Projetos
          </NavLink>
          <NavLink
            className="transition-all hover:text-gray-50"
            onClick={clickHandler}
            to="#contact"
          >
            Contato
          </NavLink>
        </div>
        <div className="flex gap-5">
          <NavLink to="https://linkedin.com/in/giovanni-lopes21">
            <LinkedinLogo width={28} height={28} weight="fill" />
          </NavLink>
          <NavLink to="https://github.com/giovanniclopes">
            <GithubLogo width={28} height={28} weight="fill" />
          </NavLink>
          <NavLink to="emailto:giovanniclopes@gmail.com">
            <EnvelopeSimple width={28} height={28} weight="fill" />
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

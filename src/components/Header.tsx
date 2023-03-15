import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  X,
} from "phosphor-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
            ? "z-50 flex items-center justify-between fixed top-0 w-full h-20 py-7 px-8 mx-auto bg-gray-500 text-white text-sm font-semibold transition-all md:items-center mbl:px-4"
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
          <AnchorLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            href="#about"
          >
            Sobre mim
          </AnchorLink>
          <AnchorLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            href="#skills"
          >
            Skills
          </AnchorLink>
          <AnchorLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            href="#projects"
          >
            Projetos
          </AnchorLink>
          <AnchorLink
            className="transition-all hover:text-white"
            onClick={clickHandler}
            href="#contact"
          >
            Contato
          </AnchorLink>
        </div>
        <div className="flex gap-5">
          <NavLink
            to="https://linkedin.com/in/giovanni-lopes21"
            target="_blank"
          >
            <LinkedinLogo width={28} height={28} weight="fill" />
          </NavLink>
          <NavLink to="https://github.com/giovanniclopes" target="_blank">
            <GithubLogo width={28} height={28} weight="fill" />
          </NavLink>
          <NavLink to="emailto:giovanniclopes@gmail.com" target="_blank">
            <EnvelopeSimple width={28} height={28} weight="fill" />
          </NavLink>
        </div>
        <button
          className=" inline transition-all md:hidden"
          onClick={clickHandler}
        >
          {togglerNav ? (
            <X width={32} height={28} />
          ) : (
            <List width={28} height={28} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;

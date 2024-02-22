import { NavLink, useLocation } from "react-router-dom";
import IconeHome from "/imagens/icone-home.png";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [activeLink] = useState(location.pathname);

  return (
    <header className="bg-banner w-screen h-28 flex justify-between items-center">
      <NavLink
        to="/"
        className={`w-28 text-center hover:cursor-pointer ${
          activeLink === "/" ? "underline" : ""
        }`}
      >
        <img src={IconeHome} alt="Icone do home" className="w-20 h-20 ml-14" />
      </NavLink>
      <nav className="h-10 flex justify-between items-center mr-14">
        <NavLink
          to="/sobremim"
          className={`w-28 text-center text-lg hover:cursor-pointer ${
            activeLink === "/sobremim" ? "underline" : ""
          }`}
        >
          Sobre mim
        </NavLink>
        <NavLink
          to="/projetos"
          className={`w-28 text-center text-lg hover:cursor-pointer ${
            activeLink === "/projetos" ? "underline" : ""
          }`}
        >
          Projetos
        </NavLink>
        <NavLink
          to="/contato"
          className={`w-28 text-center text-lg hover:cursor-pointer ${
            activeLink === "/contato" ? "underline" : ""
          }`}
        >
          Contato
        </NavLink>
      </nav>
    </header>
  );
}

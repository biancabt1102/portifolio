import { Link } from "react-router-dom";
import IconeHome from "/imagens/icone-home.png";
import { useState } from "react";

export default function Banner() {
  const [activeLink, setActiveLink] = useState<string>("");

  function handleLinkClick(link: string) {
    setActiveLink(link);
  }

  return (
    <div className="bg-banner w-screen h-28 flex justify-between items-center">
        <Link 
            to="/"
            className={`w-28 text-center hover:cursor-pointer ${
                activeLink === "/" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
            <img src={IconeHome} alt="Icone do home" className="w-20 h-20 ml-14" />
        </Link>
      <nav className="h-10 flex justify-between items-center mr-14">
        <Link
          to="/sobremim"
          className={`w-28 text-center hover:cursor-pointer ${
            activeLink === "/sobremim" ? "underline" : ""
          }`}
          onClick={() => handleLinkClick("/sobremim")}
        >
          Sobre mim
        </Link>
        <Link
          to="/projetos"
          className={`w-28 text-center hover:cursor-pointer ${
            activeLink === "/projetos" ? "underline" : ""
          }`}
          onClick={() => handleLinkClick("/projetos")}
        >
          Projetos
        </Link>
        <Link
          to="/contato"
          className={`w-28 text-center hover:cursor-pointer ${
            activeLink === "/contato" ? "underline" : ""
          }`}
          onClick={() => handleLinkClick("/contato")}
        >
          Contato
        </Link>
      </nav>
    </div>
  );
}

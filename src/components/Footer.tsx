import { FaLinkedin as Linkedin } from "react-icons/fa6";
import { FaGithub as Github } from "react-icons/fa";
import { MdOutlineEmail as Email } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-bg-dark-blue flex justify-between items-center h-full px-6">
      <p className="text-white text-base">&copy; Todos os direitos reservados</p>
      <div className="flex justify-between items-center w-48 h-36">
        <Link to="https://www.linkedin.com/in/biancabteixeira" target="_blank">
          <Linkedin color="white" size={30} />
        </Link>
        <Link to="https://www.github.com/biancabt1102" target="_blank">
          <Github color="white" size={30} />
        </Link>
        <Link to="mailto:biancabt1102@gmail.com">
          <Email color="white" size={30} />
        </Link>
      </div>
    </footer>
  );
}

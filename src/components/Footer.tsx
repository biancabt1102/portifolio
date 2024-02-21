import {FaLinkedin as Linkedin} from 'react-icons/fa6';
import { FaGithub as Github } from "react-icons/fa";
import { MdOutlineEmail as Email } from "react-icons/md";

export default function Footer() {
  return (
    <div className='flex justify-between items-center h-[124px] mx-6'>
        <p className='text-white'>&copy; Todos os direitos reservados</p>
        <div className='flex justify-between w-48'>
            <Linkedin color='white' size={30} />
            <Github color='white' size={30} />
            <Email color='white' size={30} />
        </div>
    </div>
  )
}

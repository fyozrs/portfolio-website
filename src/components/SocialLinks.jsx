import { FaGithub } from "react-icons/fa";
import '../css/SocialLinks.css'
import { GoCopy } from "react-icons/go";
import { GoFile } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div id="icon-container">
            <a href="https://github.com/fyozrs" target="_blank" ><FaGithub size='2rem' className="icons" /></a>
            <a href="https://github.com/fyozrs" target="_blank" ><CiMail size='2rem' className="icons" /></a>
            <a href="https://github.com/fyozrs" target="_blank" ><FaLinkedin size='2rem' className="icons" /></a>
            <a href="https://github.com/fyozrs" target="_blank" ><GoCopy size='2rem' className="icons" /></a>
            <a href="https://github.com/fyozrs" target="_blank" ><GoFile size='2rem' className="icons" /></a>
        </div>
    )
}

export default SocialLinks
import { FaGithub } from "react-icons/fa";
import '../css/SocialLinks.css'
import { GoFile } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks = () => (
    <div id="icon-container">
        <a href="https://github.com/fyozrs" target="_blank" className="icons" ><FaGithub size='2rem' /></a>
        <a href="mailto:kostovska.mila1@gmail.com" ><CiMail size='2rem' className="icons" /></a>
        <a href="https://www.linkedin.com/in/mila-kostovska/" target="_blank" ><FaLinkedin size='2rem' className="icons" /></a>
        <a href='CV.pdf' download='CV'><GoFile size='2rem' className="icons" /></a>
    </div>
);

export default SocialLinks
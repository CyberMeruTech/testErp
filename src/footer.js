import "./my.css";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="log"><img src="Logo.png" alt="logo" /></div>
        <div className="follow-us">
          <p>Follow Us On:</p>
          <a
            href="https://www.linkedin.com/company/cybermerutech/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.instagram.com/cybermerutech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

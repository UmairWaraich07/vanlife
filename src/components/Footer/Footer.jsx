import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__div">
        <p>&copy; {new Date().getFullYear()}</p>
        <Link className="footer__link">#Vanlife</Link>
      </div>
    </footer>
  );
};

export default Footer;

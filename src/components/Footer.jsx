import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
  <div className="container">

    <div>
      <h3>Abdullah Khan</h3>
      <p className="footer-title">
        WordPress & React Developer
      </p>
      <p>
        Email:
        <a href="mailto:abdullaiftikhar3355h@gmail.com">
          abdullaiftikhar3355h@gmail.com
        </a>
      </p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>

      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </div>

    <div className="social-links">
      <h4>Social Links</h4>

      <a
        href="https://github.com/Abdullah0127"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/abdullah-khan-2638a626b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>

  </div>

  <div className="reserved">
    © 2026 Abdullah Khan. All Rights Reserved.
  </div>
</footer>
  );
}

export default Footer;
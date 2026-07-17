import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>

            <div className="logo">
                <h3>Abdullah Khan</h3>
            </div>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

                <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>

                <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>

                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            </div>

            <div className="right-side">

                <label className="switch">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className="slider"></span>
                </label>

                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
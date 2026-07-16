import "../styles/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Abdullah Khan</h1>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar   
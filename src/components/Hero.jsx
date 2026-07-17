import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import developerimg from "../assets/download.svg"

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="left-container">
        <h1>Hi, I'm Abdullah Khan</h1>

        <h2>WordPress & React Developer</h2>

        <p>
          I build responsive and user-friendly web applications using
          React.js and WordPress. I enjoy creating modern websites
          and continuously improving my frontend development skills.
        </p>

        <div className="btns">
             <button onClick={() => navigate("/projects")}>
          View Projects
        </button> 
        <button onClick={() => navigate("/contact")}>
          Contact Me
        </button>
        </div>

       
      </div>

      <div className="right-container">
         <img src={developerimg} alt="Developer Illustration" />
      </div>
    </section>
  );
}

export default Hero;
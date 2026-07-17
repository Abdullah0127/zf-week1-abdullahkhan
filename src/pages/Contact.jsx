import { useEffect, useState } from "react";
import "../styles/Contact.css";

function Contact() {

  useEffect(()=>{
      document.title = "Abdullah Khan | Contact";
    }, [])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      message,
    });

    alert("Message Sent Successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-section">

      <div className="contact-heading">
        <h1>Contact Me</h1>
        <p>
          Have a project in mind? I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p><strong>Email:</strong><a href="mailto:abdullaiftikhar3355h@gmail.com"> abdullaiftikhar3355h@gmail.com</a> </p>

          <p><strong>Phone:</strong> +92 XXX XXXXXXX</p>

          <p><strong>Location:</strong> Pakistan</p>

        </div>

        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
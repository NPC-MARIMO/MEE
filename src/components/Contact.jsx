import { useState } from "react";
import styles from "../css/Contact.module.css";
import Button from "./Button";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSendMail = async () => {
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      clearStatus();
      return;
    }
  
    setStatus("Sending..."); // Show "Sending..." while waiting
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-otp`,
        { name, email, message }
      );
  
      if (response.data.success) {
        setStatus("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  
    clearStatus();
  };
  
  // Function to clear the status after 5 seconds
  const clearStatus = () => {
    setTimeout(() => {
      setStatus("");
    }, 5000);
  };
  

  return (
    <div id="Contact" className={styles.container}>
      <h3 className={styles.title}>Contact</h3>
      <p className={styles.description}>
        Any doubts or anything you want to discuss? Contact me using social
        media or mail.
      </p>

      <div>
        <div>
          <input
            className={styles.input}
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className={styles.textarea}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <Button title={"Send Mail"} handleSendMail={handleSendMail} />

        {status && (
          <p
            className={`${styles.status} ${
              status === "Sending..."
                ? styles.loading
                : status.includes("success")
                ? styles.success
                : styles.error
            }`}
          >
            {status}
          </p>
        )}
      </div>

      <div className={styles.other}>
        <h3 className={styles.title}>Other</h3>
        <div>
          <div className={styles.linkcontainer}>
            <a
              href="https://www.instagram.com/here._shivu?igsh=MXUzOW12dWQ1bmN6eg=="
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className={styles.linkcontainer}>
            <a
              href="https://x.com/here_Shivu"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
          <div className={styles.linkcontainer}>
            <a
              href="https://github.com/NPC-MARIMO"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className={styles.linkcontainer}>
            <a
              href="https://www.linkedin.com/in/shivang-pandey-02260a2b4"
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

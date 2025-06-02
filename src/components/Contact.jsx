import { useState } from "react";
import styles from "../css/Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";
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
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-otp`,
        {
          name,
          email,
          message,
        }
      );

      if (response.data.success) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send you email.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="Contact" className={styles.container}>
      <h3 className={styles.title}>Contact</h3>
      <p className={styles.description}>
      Got an idea, project, or just wanna vibe about code? I’m all ears.
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
        <div>
          <div>
            {" "}
            <Button title="Drop Message" handleSendMail={handleSendMail} />
            {status && <p className={styles.status}>{status}</p>}
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <a href="tel:7905358167">7905358167</a> 
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:shivangbhaiisgreat@gmail.com">shivangbhaiisgreat@gmail.com</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

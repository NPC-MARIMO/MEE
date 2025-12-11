import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import styles from "../css/Contact.module.css";
import Button from "./Button";
import axios from "axios";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ text: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  // Obfuscated Contact Info
  const [maskedEmail, setMaskedEmail] = useState("");
  const [maskedPhone, setMaskedPhone] = useState("");

  useEffect(() => {
    const user = "shivangbhaiisgreat";
    const domain = "gmail.com";
    const fullEmail = `${user}@${domain}`;
    const phone = "7905358167";

    setMaskedEmail(fullEmail);
    setMaskedPhone(phone);
  }, []);

  // Refs for animation
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formRef = useRef(null);

  const handleSendMail = async () => {
    if (!name || !emailInput || !message) {
      setStatus({ text: "Please fill in all fields.", type: "error" });
      return;
    }

    setIsSending(true);
    setStatus({ text: "Sending your message...", type: "loading" });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-otp`,
        { name, email: emailInput, message }
      );

      if (response.data.success) {
        setStatus({ text: "Message sent successfully!", type: "success" });
        setName("");
        setEmailInput("");
        setMessage("");
      } else {
        setStatus({ text: "Failed to send message.", type: "error" });
      }
    } catch (error) {
      setStatus({
        text: "An error occurred. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSending(false);
    }
  };

  // GSAP animations
  useGSAP(() => {
    if (window.innerWidth < 1000) {
      // Do not run any animation if screen width is less than 1000px
      return;
    }

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from([subtitleRef.current, descriptionRef.current], {
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.2)",
    });

    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div id="Contact" className={styles.container} ref={containerRef}>
      <h1 className={styles.title} ref={titleRef}>
        Contact
      </h1>

      <h2 className={styles.subtitle} ref={subtitleRef}>
        🌑 Have an idea, a project, or a persistent bug that needs attention? Feel free to reach out.
      </h2>

      <p className={styles.description} ref={descriptionRef}>
       Whether you’re looking to build something ambitious, solve complex technical issues, or collaborate on meaningful work, I’m ready to help. Let’s turn ideas into something real and measurable.
      </p>

      <div className={styles.formContainer} ref={formRef}>
        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.textareaWrapper}>
          <textarea
            className={styles.textarea}
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.actionContainer}>
          <div className={styles.buttonWrapper}>
            <Button
              title={isSending ? "Sending..." : "Yo!"}
              onClick={handleSendMail}
              disabled={isSending}
              style={{ width: "100px" }}
              icon={!isSending && <FaPaperPlane className={styles.sendIcon} />}
            />
            {status.text && (
              <p className={`${styles.status} ${styles[status.type]}`}>
                {status.text}
              </p>
            )}
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <a
                href="tel:&#x37;&#x39;&#x30;&#x35;&#x33;&#x35;&#x38;&#x31;&#x36;&#x37;"
                className={styles.contactLink}
              >
                Contact Number
              </a>
            </div>

            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <a
                href="mailto:&#x73;&#x68;&#x69;&#x76;&#x61;&#x6E;&#x67;&#x62;&#x68;&#x61;&#x69;&#x69;&#x73;&#x67;&#x72;&#x65;&#x61;&#x74;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;"
                className={styles.contactLink}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { useState, useRef } from "react";
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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ text: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const formRef = useRef(null);

  const handleSendMail = async () => {
    if (!name || !email || !message) {
      setStatus({ text: "Please fill in all fields.", type: "error" });
      return;
    }

    setIsSending(true);
    setStatus({ text: "Sending your message...", type: "loading" });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-otp`,
        { name, email, message }
      );

      if (response.data.success) {
        setStatus({ text: "Message sent successfully!", type: "success" });
        setName("");
        setEmail("");
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

  // Animation setup
  useGSAP(() => {
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
        🌑 Have an idea? A dream? A bug that won't die? Bring it.
      </h2>

      <p className={styles.description} ref={descriptionRef}>
        Whether you're here to ship something wild, debug the chaos, or just
        conjure code with kindred spirits — ⚡ I'm listening. Fully. Fiercely.
        Let's turn thoughts into thunder.
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              title={isSending ? "Sending..." : "Say Hii!"}
              onClick={handleSendMail}
              disabled={isSending}
              style={{width : "100px"}}
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
              <a href="tel:7905358167" className={styles.contactLink}>
                7905358167
              </a>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <a
                href="mailto:shivangbhaiisgreat@gmail.com"
                className={styles.contactLink}
              >
                shivangbhaiisgreat@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

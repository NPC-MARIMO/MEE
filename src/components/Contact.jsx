import styles from "../css/Contact.module.css";
import Button from "./Button";

function Contact() {
  return (
    <div id="Contact" className={styles.container}>
      <h3 className={styles.title}>Contact</h3>
      <p className={styles.description}>
        Any doubts or anything you want to discuss, Contact me using any social
        media or mail.
      </p>
      <div>
        <div>
          <input className={styles.input} placeholder="Name" type="text" />
          <input className={styles.input} type="text" placeholder="Email" />
        </div>
        <textarea className={styles.textarea} placeholder="Message"></textarea>
        <Button title={"Send Mail"}  />
      </div>
      <div className={styles.other}>
        <h3 className={styles.title}>Other</h3>
        <div>
          <div className={styles.linkcontainer}>
            <a href="https://www.instagram.com/here._shivu?igsh=MXUzOW12dWQ1bmN6eg==" target="_blank" className={styles.link}>Instagram</a>
          </div>
          <div className={styles.linkcontainer}>
            <a   href="https://x.com/here_Shivu" target="_blank" className={styles.link}>X</a>
          </div>
          <div className={styles.linkcontainer}>
            <a href="https://github.com/NPC-MARIMO" target="_blank" className={styles.link}>Github</a>
          </div>
          <div className={styles.linkcontainer}>
            <a href="https://www.linkedin.com/in/shivang-pandey-02260a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={styles.link}>LinkedIn</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;

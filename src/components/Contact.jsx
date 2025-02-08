import styles from "../css/Contact.module.css";
import Button from "./Button";

function Contact() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default Contact;

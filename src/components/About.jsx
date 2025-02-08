import styles from '../css/About.module.css'

function About() {
    return ( 
        <div className={styles.container}>
                <h1 className={styles.title}>About</h1>
                <div>
                    <div className={styles.logo}></div>
                    <p className={styles.description}>I am a skilled Full-Stack Web & App Developer with Experience in JS and Expertise in Frameworks like React, Next, Three JS . </p>
                </div>  
                <p className={styles.description}>I’m a strong willed person dedicated to my work and always looking for the opportunities to learn and develop my skills and sharing knowledge.</p>
                <p className={styles.description}>I do like coding, but other than coding I like playing tactical games like chess, sketching and watching anime </p>
        </div>
     );
}

export default About;
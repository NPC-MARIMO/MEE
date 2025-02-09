import styles from '../css/Skills.module.css'

function Contact() {

    const skills = ['MERN', 'React.js', 'Next.js', 'Three.js', 'MongoDB', 'Express.js', 'Node.js', 'LR', 'Github', 'Git', 'Redux.js', 'Canva', 'Figma', 'RESTful API', 'TailwindCSS', 'React-Native', 'TypeScript']

    const logo = "</>"
    return (  
        <div className={styles.skillcontainer}>
            <h3 className={styles.title}>Skills</h3>
            <div className={styles.skills}>
                <h1 className={styles.logo}>{logo}</h1>
                <div className={styles.skill}>
                    {
                        skills.map(skill => (
                            <div key={skill} className={styles.sk}>{skill}</div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}

export default Contact;
import styles from '../css/Experience.module.css'

function Experience() {
    return ( 
        <div id='Experience' className={styles.container}>
            <h3 className={styles.title}>Experience</h3>
            <p className={styles.description}>I started my coding journey in Feb 2k24 and I’ve worked on various personal projects and learned a lot of things </p>
            <p className={styles.description}>In this time period, I have learned various stuff like Frontend, Backend, Restful API, SSR / CSR , Reverse Proxy etc. </p>
        </div>
     );
}

export default Experience;
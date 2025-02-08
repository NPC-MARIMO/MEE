import styles from '../css/Hero.module.css'
import GithubStats from './GithubStats';
function    Hero() {
    return ( 
        <div>
            <h3 className={styles.title}>Hi, I am Shivang Pandey,</h3>
            <p className={styles.description}>I'm a self taught MERN Full-Stack Developer, who's passionate about creating creative projects</p>
            <div className={styles.container}>
                <div className={styles.circle}></div>
                <div className={styles.stats}>
                    <div>
                        <div></div>
                        <h3>214 Github Contribution</h3>
                    </div>
                    <div>
                        <div></div>
                        <h3>61 Repositories</h3>
                    </div>
                    <div>
                        <div></div>
                        <h3>10 Stars</h3>
                    </div>
                </div>
            </div>
            <div className={styles.githubcontri}>
                <GithubStats />
            </div>
        </div>
     );
}

export default Hero;
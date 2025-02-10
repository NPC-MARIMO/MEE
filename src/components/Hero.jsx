import styles from '../css/Hero.module.css'
import GithubStats from './GithubStats';
function    Hero() {
    return ( 
        <div id='Me'>
            <h3 className={styles.title}>Hi, I am Shivang Pandey,</h3>
            <p className={styles.description}>I'm a self taught MERN Full-Stack Developer, who's passionate about creating creative projects</p>
            <div className={styles.container}>
                <div className={styles.circle}>
                    <img src="https://avatars.githubusercontent.com/u/165462791?s=400&u=8e9813b098941c80c134807a98f0be5c7403359a&v=4" alt="" />
                </div>
                <div className={styles.stats}>
                    <div>
                        <div></div>
                        <h3>243 Github Contribution</h3>
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
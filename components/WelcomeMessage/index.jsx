import styles from './styles.module.css'

const WelcomeMessage = ({ animeTitle }) => {
    return (
        <div className={styles.welcomeContainer}>
            <h1 className={styles.title}>Bem -vindo ao Nosso Site!</h1>
            <p className={styles.subTitle}>Aqui estão os detalhes do anime que estamos assistindo</p>
            <p className={styles.animeTitle}>{`Anime Atual: ${animeTitle}`}</p>
        </div>
    )
}

export default WelcomeMessage

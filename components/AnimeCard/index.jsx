import { useState } from "react"
import styles from './styles.module.css'

const AnimeCard = ({ animeCover, backText }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleCardClick = () => {
        setIsFlipped((prevState) => !prevState)
    }

    return (
        <div className={`${styles.card} ${isFlipped ? styles.cardActive : '' }`} onClick={handleCardClick}>
            <div className={styles.cardFront}>
                <img src={animeCover} alt="Anime Cover" />
            </div>
            <div className={styles.cardBack}>
                <p>{backText}</p>
            </div>
        </div>
    )
}

export default AnimeCard

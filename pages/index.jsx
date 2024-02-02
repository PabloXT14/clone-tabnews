import WelcomeMessage from "../components/WelcomeMessage";
import styles from "../styles/home.module.css";
import AnimeCard from "../components/AnimeCard";

function Home() {
  const animeTitle = "Bleach";
  const animeQuote =
    "Em cada desafio, descobrimos nossa força interior - como os shinigamis de Bleach, estamos prontos para enfrentar o desconhecido juntos, BANKAI!";
  const animeCoverUrl = "/bg-bleach.jpg";

  return (
    <div className={styles.homeContainer}>
      <WelcomeMessage animeTitle={animeTitle} />
      <AnimeCard animeCover={animeCoverUrl} backText={animeQuote} />
    </div>
  );
}

export default Home;

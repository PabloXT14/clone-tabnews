import styles from "./styles.module.css";

const WelcomeMessage = ({ animeTitle }) => {
  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.title}>Bem -vindo ao Nosso Site!</h1>

      <p className={styles.subTitle}>
        Aqui estão os detalhes do anime que estamos assistindo
      </p>

      <p className={styles.animeTitle}>{`Anime Atual: ${animeTitle}`}</p>

      <h2>Princípios de Comunidade</h2>

      <p>
        Aqui estão listados os princípios que a comunidade desse projeto (que
        ainda não sei sobre exatamente o que será, só fiz um layout inicial para
        impactar alguém próximo a mim, mas em fim) deverá seguir independente do
        rumo que ele siga:
      </p>

      <ul>
        <li>
          <strong>1º Respeito e Empatia:</strong>
          <br />
          <p>
            Os membros da comunidade devem demonstrar respeito mútuo e empatia
            uns pelos outros. Isso significa valorizar as diferenças, ouvir
            atentamente as perspectivas dos outros e tratar todos com dignidade
            e compreensão.
          </p>
        </li>

        <li>
          <strong>2º Colaboração e Cooperação:</strong>
          <br />
          <p>
            Uma comunidade forte depende da colaboração e cooperação de seus
            membros. Isso envolve trabalhar juntos para alcançar objetivos
            comuns, apoiar uns aos outros em momentos de necessidade e
            compartilhar recursos e conhecimentos para benefício coletivo.
          </p>
        </li>

        <li>
          <strong>3º Comunicação Aberta e Transparente:</strong>
          <br />
          <p>
            Uma comunicação aberta e transparente é essencial para construir
            confiança e resolver conflitos de maneira construtiva. Isso inclui
            manter canais de comunicação acessíveis a todos, encorajar o diálogo
            aberto e honesto e garantir que as decisões importantes sejam
            tomadas de forma transparente e inclusiva.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WelcomeMessage;

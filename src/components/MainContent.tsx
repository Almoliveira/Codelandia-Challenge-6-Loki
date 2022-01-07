import styles from "./MainContent.module.css";
import StarSVG from "../assets/images/star.svg";
import EmptyStarSVG from "../assets/images/empty-star.svg";
import ClockSVG from "../assets/images/clock.svg";

const MainContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.flexContainer}>
          <img
            className={styles.imageContainer}
            src={require("../assets/images/capa.png")}
            alt="LokiCapa"
          />
          <div className={styles.descriptionContainer}>
            <h2>
              <p>
                Em "Loki" da Marvel Studios, o vilão mercurial Loki [Tom
                Hiddleston]
              </p>
              <p>
                Retoma o papel como o Deus do Mal em uma nova série que ocorre
                após
              </p>
              <p>os eventos de "Vingadores: Endgame".</p>
            </h2>
            <div className={styles.flexContainer}>
              <div className={`${styles.spacer} ${styles.flexContainerclock}`} >
                <img  src={ClockSVG} alt="clock" />
                <h3>51min</h3>
              </div>
              <div className={styles.spacer}>
                <img src={StarSVG} alt="star" />
                <img src={StarSVG} alt="star" />
                <img src={StarSVG} alt="star" />
                <img src={StarSVG} alt="star" />
                <img src={EmptyStarSVG} alt="star" />
              </div>
              <h2 className={styles.spacer}>2021</h2>
            </div>
            <div>
              <button className={`${styles.buttonStyle} ${styles.blueBtn}`}>
                Assistir Agora
              </button>
              <button className={`${styles.buttonStyle} ${styles.blackBtn}`}>
                Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

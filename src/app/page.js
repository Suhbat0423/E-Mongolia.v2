import styles from "./page.module.css";
import Mail from "../../icon/mail";
import Ring from "../../icon/ring";

export default function page() {
  return (
    <body>
      <header className={styles.header}>
        <div className={styles.headerImg}>
          <img
            src="https://ema.gov.mn/wp-content/uploads/2022/10/emongolia-academy-logo2.svg"
            alt=""
          />
        </div>
        <div className={styles.icons}>
          <Mail />
          <Ring />
        </div>
      </header>

      <div className={styles.profileContainer}>
        <img src="" alt="" className={styles.profileImg} />
        <div className={styles.profileInfo}></div>
      </div>
    </body>
  );
}

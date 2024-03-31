import styles from "./page.module.css";
import Mail from "../../icon/mail";

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
        <div>
          <Mail />
        </div>
      </header>
    </body>
  );
}

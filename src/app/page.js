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
        <img
          className={styles.profileImg}
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          alt=""
        />
        <img
          className={styles.profileImgLogo}
          src="./554d8eb2db2055b525bfa9abdf1d56ee.webp"
          alt=""
        />
        <div className={styles.profileInfo}>
          <p>Оройн мэнд!</p>
          <h1>Э.сүхбат</h1>
          <h3>110781002349@e-mongolia.mn</h3>
        </div>
      </div>
      <div className={styles.id}>
        <div className={styles.idheader}>
          <p>Миний бичиг баримтууд</p>
          <div>
            <p>шинэчлэх</p>
            <div className="refresh"></div>
          </div>
        </div>
      </div>
    </body>
  );
}

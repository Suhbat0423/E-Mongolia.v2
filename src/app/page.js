import styles from "./page.module.css";
import Mail from "../../icon/mail";
import Ring from "../../icon/ring";
import Refresh from "../../icon/refresh";
// import IDF from "../../icon/IDF";

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
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
          alt=""
        />
        <img
          className={styles.profileImgLogo}
          src="https://i.ibb.co/L1v42Nt/lgoo.gif"
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
          <div className={styles.containerRefresh}>
            <p>шинэчлэх</p>
            <div>
              <Refresh className={styles.refresh} />
            </div>
          </div>
        </div>
        <div className={styles.idcontainer}>
          <img
            className={styles.idpic}
            src="https://i.ibb.co/3Stb6TT/Clip-path-group.png"
            alt=""
          />
          <img
            className={styles.idPic2}
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt=""
          />
          <div className={styles.line}></div>
          <br />
          <p>Иргэний үнэмлэх</p>
        </div>
      </div>
    </body>
  );
}

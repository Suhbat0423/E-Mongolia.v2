import styles from "./page.module.css";
import Mail from "../../icon/mail";
import Ring from "../../icon/ring";
import Refresh from "../../icon/refresh";
import Car from "../../icon/car";
import Notariat from "../../icon/notariat";
import Daatgal from "../../icon/daatgal";
import Huuhdiin from "../../icon/huuhdiin";
import Eruul from "../../icon/eruul";
import Unet from "../../icon/unet";
import Zeel from "../../icon/zeel";
import Tatvar from "../../icon/tatvar";
import Company from "../../icon/company";
import House from "../../icon/house";
import Document from "../../icon/document";
import Folder from "../../icon/folder";
import Profile from "../../icon/profile";
import QR from "../../icon/qr";

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
      <div className={styles.needs}>
        <h3>Хэрэгцээт үйлдэл</h3>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Car />
          </div>
          <p>Тээврийн хэрэгсэл</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Notariat />
          </div>
          <p>Нотариатын үйлчилгээ</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Daatgal />
          </div>
          <p>Нийгмийн даатгал</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Huuhdiin />
          </div>
          <p>Хүүхдийн мөнгөн тэтгэмж</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Eruul />
          </div>
          <p>Эрүүл мэнд</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Unet />
          </div>
          <p>Үнэт цааснууд / хувьцаа</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Zeel />
          </div>
          <p>Зээлийн мэдээлэл</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Tatvar />
          </div>
          <p>Татвар</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Company />
          </div>
          <p>Компани</p>
        </div>
        <div className={styles.needsContainer}>
          <div className={styles.iconcar}>
            <Unet />
          </div>
          <p>What3words</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footericons}>
          <House />
          <p>Hүүр</p>
        </div>
        <div className={styles.footericon}>
          <Document />
          <p>Үйлчилгээ</p>
        </div>
        <div className={styles.footericon}>
          <Folder />
          <p>Нэмэлт</p>
        </div>
        <div className={styles.footericon}>
          <Profile />
          <p className={styles.footerProfile}>Профайл</p>
        </div>
        <div className={styles.circle}>
          <QR />
        </div>
      </div>
    </body>
  );
}

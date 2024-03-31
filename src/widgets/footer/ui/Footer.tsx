import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import GlobalIcon from "../../../shared/ui/GlobalIcon";
import VKIcon from "../../../shared/ui/VKIcon";
import TGIcon from "../../../shared/ui/TGIcon";
import WAIcon from "../../../shared/ui/WAIcon";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to={"/"} className={styles.mainLink}>
        QPICK
      </Link>
      <nav className={styles.nav}>
        <Link to={"/"} className={styles.link}>Избранное</Link>
        <Link to={"/cart"} className={styles.link}>Корзина</Link>
        <Link to={"/"} className={styles.link}>Контакты</Link>
      </nav>
      <div className={styles.navAndLangs}>
        <Link to={"/"} className={styles.link}>Условия сервиса</Link>
        <div className={styles.languages}>
          <GlobalIcon width={20} height={20} className={styles.global} />
          <span className={styles.selectedLanguage}>Рус</span>
          <span>Eng</span>
        </div>
      </div>
      <nav className={styles.social}>
        <Link to={"https://vk.com/"} target={"_blank"} className={styles.icon}>
          <VKIcon width={30} height={20} />
        </Link>
        <Link
          to={"https://telegram.org/"}
          target={"_blank"}
          className={styles.icon}
        >
          <TGIcon width={30} height={30} />
        </Link>
        <Link
          to={"https://www.whatsapp.com/"}
          target={"_blank"}
          className={styles.icon}
        >
          <WAIcon width={30} height={30} />
        </Link>
      </nav>
    </footer>
  );
}

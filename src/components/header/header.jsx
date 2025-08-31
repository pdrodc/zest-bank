import { useState } from "react";
import styles from "./header.module.css";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div className={styles.Logo}>ZestBank</div>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img
            src={menuActive ? iconCloser : iconBars}
            id={styles.menuIcons}
            alt=""
          />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="#home">Home</a>
            </li>
            <li className={styles.navLi}>
              <a href="#produtos">Produtos</a>
            </li>
            <li className={styles.navLi}>
              <a href="#cartoes">Cartões</a>
            </li>
            <li className={styles.navLi}>
              <a href="#investimentos">Investimentos</a>
            </li>
            <li className={styles.navLi}>
              <a href="#empresa">Empresarial</a>
            </li>
          </ul>
        </nav>
        <div className={styles.Buttons}>
          <button className={styles.buttonLogin} onClick={() => window.location.href = "/login"} >Acessar Minha Conta</button>
          <button className={styles.buttonLogin} >Abrir Conta</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

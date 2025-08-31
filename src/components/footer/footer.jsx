import styles from "./footer.module.css";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapperFooter}>
        <div className={styles.logo}>
          <h1>ZestBank</h1>
        </div>
        <div className={styles.linksFooter}>
          <nav className={styles.linksFooterNav}>
            <ul className={styles.ulMenu}>
              <li className={styles.navLi}>
                <a href="">Home</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Produtos</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Cartões</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Investimentos</a>
              </li>
              <li className={styles.navLi}>
                <a href="">Empresarial</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.socialMedia}>
          <nav className={styles.socialMediaNav}>
            <ul className={styles.socialMediaUl}>
              <li>
                <a href="https://x.com/porrapedroo_" target="_blank">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pdrodc/" target="_blank">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="https://github.com/pdrodc" target="_blank">
                  <Github />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pedro-deolinda-5111a8350/" target="_blank">
                  <Linkedin />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <form>
        <div className={styles.Title}>Receba atualizações por email</div>
          <input type="email" placeholder="Email" />
          <button type="submit">Enviar</button>
        </form>
        <div className={styles.copyright}>
          <p>© 2025 ZestBank. Todos os direitos reservados.</p>
          <p>Desenvolvido por Pedro Deolinda</p>
          <div className={styles.copyrightLinks}>
            {" "}
            <a href="">Política de privacidade</a>
            <a href="">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

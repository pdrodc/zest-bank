import styles from "./business.module.css";
import { ArrowRight } from "lucide-react";
import BusinessImg from "../../assets/business.png"

const Business = () => {
  return (
    <section className={styles.Business} id="empresa">
      <div className={styles.wrapperBusiness}>
        <div className={styles.businessContent}>
          <h2>
            O ZestBank também tem contas para empresas! <span>Abra uma agora para sua empresa</span>.
          </h2>
          <p>
            Crie já sua conta PJ de graça, e faça sua empresa crescer.
          </p>
          <button>Crie sua conta</button>
          <a href="">Saiba Mais <ArrowRight /></a>
        </div>
        <img src={BusinessImg} alt="" />
      </div>
    </section>
  );
};

export default Business;

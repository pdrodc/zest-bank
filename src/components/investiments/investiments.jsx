import styles from "./investiments.module.css";
import Bitcoin from "../../assets/bitcoin.png";

const Investiments = () => {
  return (
    <section className={styles.investiments} id="investimentos">
      <div className={styles.wrapperInvestiments}>
        <img src={Bitcoin} alt="" />
        <div className={styles.investimentsContent}>
          <h2>
            Invista seu dinheiro na palma da mão com o <span>ZestBank</span>. O
            banco que abre portas para investimentos Nacionais e Internacionais.
          </h2>
          <p>
           Seus sonhos merecem crescer. Faça seu dinheiro trabalhar por você.
          </p>
          <button>Comece a Investir agora</button>
        </div>
      </div>
    </section>
  );
};

export default Investiments;

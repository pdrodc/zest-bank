import styles from "./investype.module.css";
import { ArrowRight } from "lucide-react";

const Investype = () => {
  const investmentsData = [
    {
      title: "Renda Fixa",
      text: "Segurança e rentabilidade garantida para você.",
      img: "http://cdn.dribbble.com/userupload/22606053/file/original-8df49552a945fc6edcc10ca094db8795.png?resize=752x564&vertical=center", // cofre
    },
    {
      title: "Fundos Imobiliários",
      text: "Invista em imóveis sem burocracia.",
      img: "https://cdn.dribbble.com/userupload/6472100/file/original-371c48bfe8322fa1e4aedb63e302edea.png?resize=1024x768&vertical=center", // prédios
    },
    {
      title: "Criptomoedas",
      text: "Bitcoin, Ethereum, Solana e muito mais.",
      img: "https://cdn.dribbble.com/userupload/24232887/file/original-e597982daa65246e65b43a901721b0d4.jpg?resize=1024x768&vertical=center", // bitcoin
    },
    {
      title: "Ações",
      text: "Seja sócio das maiores empresas do mercado.",
      img: "https://cdn.dribbble.com/userupload/37241437/file/original-fb0522543fc15c199e72d27ff016b3ac.png?resize=752x564&vertical=center", // gráfico
    },
  ];
  return (
    <section className={styles.invesType}>
      <div className={styles.invesTypeWrapper}>
        <div className={styles.cardtypeContent}>
          <h2 className={styles.sectionTitle}>
            Escolha em que você quer investir
          </h2>
        </div>
        <div className={styles.flex}>
        {investmentsData.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className={styles.overlay}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#" className={styles.link}>
                Saiba mais <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
        {/* <div className={styles.Cards}>
          <div className={styles.card}>
            <div className={styles.content}>
              <h3 className={styles.title}>Criptomoedas</h3>
              <p className={styles.subtitle}>
                Bitcoin, Ethereum, Solana e muito mais
              </p>
              <a href="#crypto" className={styles.link}>
                Saiba mais <span className={styles.arrow}><ArrowRight size={16} /></span>
              </a>
            </div>
          </div>
          <div className={styles.card} id="renda">
            <div className={styles.content}>
              <h3 className={styles.title}>Renda Fixa</h3>
              <p className={styles.subtitle}>
                CDB, LCA, Poupança e muito mais.
              </p>
              <a href="#crypto" className={styles.link}>
                Saiba mais <span className={styles.arrow}><ArrowRight size={16} /></span>
              </a>
            </div>
          </div>
          <div className={styles.card} id="internacional">
            <div className={styles.content}>
              <h3 className={styles.title}>Internacionais</h3>
              <p className={styles.subtitle}>
                Euro, Dólar, Libra e muito mais
              </p>
              <a href="#crypto" className={styles.link}>
                Saiba mais <span className={styles.arrow}><ArrowRight size={16} /></span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Investype;

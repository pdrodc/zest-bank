import styles from "./cardstype.module.css";
import ProCard from "../../assets/pro-card.png";
import InterCard from "../../assets/inter-card.png";
import BlackCard from "../../assets/black-card.png";

const CardsType = () => {
  return (
    <section className={styles.cardsType} id="cartoes">
      <div className={styles.wrapperCardsType}>
        <div className={styles.cardtypeContent}>
          <h2 className={styles.sectionTitle}>
            Escolha o cartão ideal para você
          </h2>
          <p>Parceria direta com a MasterCard</p>
        </div>
        <div className={styles.Cards}>
          <div className={styles.cardBox}>
            <img src={ProCard} alt="" />
            <h2>ProCard</h2>
            <div className={styles.separator}></div>
            <ul className={styles.cardList}>
              <li>Cashback de 1% em todas as compras nacionais</li>
              <li>Seguro de viagem incluso</li>
              <li>Acesso a salas VIP em aeroportos nacionais</li>
              <li>Proteção de preço e compra</li>
              <li>Parcelamento facilitado sem juros em parceiros</li>
            </ul>
            <button>Solicite Agora</button>
          </div>
          <div className={styles.cardBox}>
            <img src={InterCard} alt="" />
            <h2>Platinum Card</h2>
            <div className={styles.separator}></div>
            <ul className={styles.cardList}>
              <li>Cashback de 2% em todas as compras internacionais</li>
              <li>Seguro saúde em viagens</li>
              <li>Concierge 24h para reservas e assistência</li>
              <li>Upgrade de cabine em companhias aéreas parceiras</li>
              <li>Garantia estendida em produtos comprados com o cartão</li>
            </ul>
            <button>Solicite Agora</button>
          </div>
          <div className={styles.cardBox}>
            <img src={BlackCard} alt="" />
            <h2>Black Card</h2>
            <div className={styles.separator}></div>
            <ul className={styles.cardList}>
              <li>Cashback de até 3% em compras internacionais</li>
              <li>Acesso ilimitado a salas VIP (Priority Pass)</li>
              <li>Assistente pessoal exclusivo</li>
              <li>Seguro de automóvel em viagens</li>
              <li>Experiências exclusivas em eventos de luxo e gastronomia</li>
            </ul>
            <button>Solicite Agora</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsType;

import styles from "./cards.module.css";
import Card from "../../assets/pro-card.png";

const Cards = () => {
  return (
    <section className={styles.cards}>
      <div className={styles.wrapperCards}>
        <div className={styles.cardContent}>
          <h2>
            <span>ZestBank Card</span>, o melhor cartão da atualidade. O cartão que abre
            portas para experiências exclusivas.
          </h2>
          <p>
            Um cartão exclusivo, pensado para quem busca praticidade no dia a
            dia, benefícios em viagens e mais vantagens em cada compra.
          </p>
          <button>Solicite seu ZestCard</button>
        </div>
        <img src={Card} alt="" />
      </div>
    </section>
  );
};

export default Cards;

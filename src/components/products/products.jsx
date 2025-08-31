import styles from "./products.module.css";
import {
  CreditCard,
  PiggyBank,
  LineChart,
  Smartphone,
  DollarSign,
  PlaneTakeoff,
} from "lucide-react";

const Products = () => {
  const items = [
    {
      icon: <CreditCard size={32} />,
      title: "Cartões",
      desc: "Cartões de crédito e débito sem anuidade, aceitos no mundo todo.",
    },
    {
      icon: <PiggyBank size={32} />,
      title: "Conta Digital",
      desc: "Abra sua conta grátis em minutos e movimente tudo pelo celular.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Investimentos",
      desc: "Renda fixa e variável, tudo em um só app, de forma simples e segura.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Completo",
      desc: "Gerencie seu dinheiro de forma prática e 100% digital com o nosso app.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Empréstimos",
      desc: "Empréstimos pessoais e empresariais, sem tarifas escondidas.",
    },
    {
      icon: <PlaneTakeoff size={32} />,
      title: "Viagens",
      desc: "Aproveite as melhores ofertas de viagens com desconto e cashback.",
    },
  ];

  return (
    <section className={styles.products} id="produtos">
      <h2 className={styles.sectionTitle}>Nossos Produtos</h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className={styles.btn}>Saiba Mais</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

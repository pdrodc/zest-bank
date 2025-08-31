import styles from "./hero.module.css"
import Card from "../../assets/card.png"
import { ArrowRight, ShieldCheck, Trophy } from "lucide-react"


const Hero = () => {
    return (
        <section className={styles.Hero} id="home">
            <div className={styles.wrapperHero}>
                <div className={styles.contentHero}>
                    <h1>Um banco feito para <span>Você.</span></h1>
                    <p>Abra sua conta 100% digital em poucos minutos, sem tarifas escondidas.</p>
                    <div className={styles.button}>
                        <button>Abrir Conta Agora</button>
                        <button onClick={() => {window.location.href = '#investimentos'}}>Simule um Investimento</button>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <ShieldCheck size={20} />
                            <p>Certificado de Segurança</p>
                        </div>
                        <div className={styles.feature}>
                            <Trophy size={20} />
                            <p>Melhor Banco Digital de 2025</p>
                        </div>
                    </div>
                </div>
                <img src={Card} alt="" />
            </div>
        </section>
    )
}

export default Hero
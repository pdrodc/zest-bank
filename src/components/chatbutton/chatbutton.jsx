import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import styles from "./chatbutton.module.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botão flutuante */}
      <button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Caixa de chat */}
      {isOpen && (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <h4>Atendimento ZestBank</h4>
          </div>
          <div className={styles.chatBody}>
            <p>👋 Olá! Como podemos te ajudar hoje?</p>
          </div>
          <div className={styles.chatFooter}>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className={styles.chatInput}
            />
            <button className={styles.sendButton}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;

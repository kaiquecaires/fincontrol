import styles from './home.module.scss'
import { FaPlusCircle } from 'react-icons/fa';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.total}>
        <span className={styles.totalTitle}>Bem vindo Kaique, seu patrimônio é:</span>
        <div className={styles.valueContainer}>
          <span className={styles.type}>R$</span>
          <span className={styles.value}>1000,00</span>  
        </div>
      </div>

      <div className={styles.balance}>
        <div className={styles.income}>
          <span className={styles.title}>
            Ganhos
            <FiTrendingUp color="#74DCC5" />
          </span>
          <div className={styles.valueContainer}>
            <span className={styles.type}>R$</span>
            <span className={styles.value}>1000,00</span>  
          </div>
        </div>
        <div className={styles.outcome}>
          <span className={styles.title}>
            Gastos
            <FiTrendingDown color="#CF6679" />
          </span>
          <div className={styles.valueContainer}>
            <span className={styles.type}>R$</span>
            <span className={styles.value}>1000,00</span>  
          </div>
        </div>
      </div>

      <div className={styles.transactionsContainer}>
        <div className={styles.transactionsHeader}>
          <span className={styles.transactionsTitle}>Últimas transações</span>
          <FaPlusCircle color="#74DCC5" size={30} />
        </div>
        <div className={styles.transactions}>
          <div className={styles.transaction}>
            <span className={styles.transactionTitle}>Compras</span>
            <span className={styles.transactionOutcome}>- R$ 1000,00</span>
          </div>

          <div className={styles.transaction}>
            <span className={styles.transactionTitle}>Salário</span>
            <span className={styles.transactionIncome}>R$ 2000,00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

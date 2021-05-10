import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.total}>
        <span className={styles.totalTitle}>Bem vindo Kaique, seu patrimônio é:</span>
        <div className={styles.totalValue}>
          <span className={styles.type}>R$</span>
          <span className={styles.value}>1000,00</span>  
        </div>
      </div>

      <div className={styles.balance}>
        <div className={styles.income}>
          <span className={styles.incomeTitle}>Ganhos</span>
          <span className={styles.incomeValue}>R$ 1000,00</span>
        </div>

        <div className={styles.outcome}>
          <span className={styles.outcomeTitle}>Gastos</span>
          <span className={styles.outcomeValue}>R$ 1000,00</span>
        </div>
      </div>
      <div className={styles.transactions}></div>
    </div>
  )
}

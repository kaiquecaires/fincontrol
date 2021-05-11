import styles from './home.module.scss'

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
          <span className={styles.title}>Ganhos</span>
          <div className={styles.valueContainer}>
            <span className={styles.type}>R$</span>
            <span className={styles.value}>1000,00</span>  
          </div>
        </div>

        <div className={styles.outcome}>
          <span className={styles.title}>Gastos</span>
          <div className={styles.valueContainer}>
            <span className={styles.type}>R$</span>
            <span className={styles.value}>1000,00</span>  
          </div>
        </div>
      </div>
      <div className={styles.transactions}></div>
    </div>
  )
}

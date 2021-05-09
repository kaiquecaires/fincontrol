import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.headerLogoText}>FINCONTROL</p>
      <div className={styles.headerActions}>
        <div className={styles.headerNavigation}>
          <a href="">Dashboard</a>
          <a href="" className={styles.activeButton}>Transações</a>
        </div>
        <button className={styles.headerLoginButton}>Login</button>
      </div>
    </header>
  )
}

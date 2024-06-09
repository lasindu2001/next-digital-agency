import styles from './navbar.module.css'
import Links from './links/Links'

const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default NavBar
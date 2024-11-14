import styles from "./header.module.scss"
import Link from "next/link"
const Header = ()=>{
    return(
        <div className={styles.header}>
            <div className={styles.titleContainer}>
            <h1>VolunteerConnect</h1>

            </div>

            <div className={styles.linksContainer}>
                <Link href="/login" className={`${styles.links} ${styles.linkLogin}`}>Iniciar sesión</Link>
                <Link href="/register" className={`${styles.links} ${styles.linkRegister}`}>Registrarse</Link>

            </div>
        </div>
    )
}

export default Header
import styles from "./mainHome.module.scss"
import Link from "next/link"

const MainHome = ()=>{
    return(
        <main className={styles.Main}>

            <div className={styles.titleContainer}>

            <h2>Conecta, Colabora, Cambia el Mundo</h2>

            </div >

            <div className={styles.textContainer}>
                <p>Únete a nuestra comunidad de voluntarios y organizadores. Encuentra proyectos que te apasionen o crea los tuyos para hacer una diferencia en tu comunidad.</p>
            </div>

            <div className={styles.linksContainer}>
                <Link href="/ogin" className={`${styles.links} ${styles.linkLogin}`}>Explorar Proyectos</Link>
                <Link href="/register" className={`${styles.links} ${styles.linkRegister}`}>Comenzar como Organizador</Link>
            </div>
        </main>
    )
}

export default MainHome
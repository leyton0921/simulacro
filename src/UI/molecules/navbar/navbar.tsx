"use client"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { CustomSession } from '@/app/api/auth/[...nextauth]/route';
import styles from './navbar.module.scss';
import FormModalCreate from '../modal/modal';


const Navbar: React.FC = () => {
    
    const { data: session  } = useSession();
    const sessionUser = session as CustomSession;

    console.log(sessionUser?.user.photo);


    const [isModalOpen, setIsModalOpen] = useState(false);
  

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        
        <nav className={styles.nav}>
            <div className={styles.items}>
                <h1  className={styles.title}>Dashboard de proyectos</h1>
            </div>

            <div className={styles.items}>
                <button className="primary-icons"> Descargar reporte</button>
                <button onClick={openModal} >nuevo proyecto</button>
                <div className={styles.infoUser}>
                    <img
                        className={styles.image}
                        src={sessionUser?.user.photo!}
                        alt="Foto de usuario"
                    />
                    <p>{sessionUser?.user.name}</p>
                </div>
            </div>

            {isModalOpen && <FormModalCreate onClose={closeModal}  />}
        </nav>
    )
}

export default Navbar;
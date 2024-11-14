"use client"
import styles from "./aside.module.scss";
import Button from "@/UI/atoms/button/button";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Aside = () => {

    const currentPath = usePathname();
    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/'
        });
    };

    return (
        <aside className={styles.Aside}>
            <div>
                <h1>VolunteerConnect</h1>
            </div>

            <div className={styles.buttonsContainer}>
                <Link href="/dashboard/projects" className={`${styles.buttons} ${currentPath === "/dashboard/projects"?styles.active: ""}`}><FaRegFolderOpen/> Proyectos</Link>
                <Button className={styles.buttons} onClick={handleSignOut}><IoExitOutline/> Cerrar sesion</Button>
            </div>
        </aside>
    )
}

export default Aside
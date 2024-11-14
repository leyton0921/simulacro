import React from 'react';
import { IProjectsResponse } from "@/app/core/application/dto/projects/projects-response.dto";
import { IUsersResponse } from "@/app/core/application/dto/projects/organizadors-response.dto";
import styles from "./panel.module.scss";

interface IProps {
    data: IProjectsResponse;
}

const Panel = ({ data }: IProps) => {
    const totalProjects = data.metadata.totalItems;
    const activeProjects = data.data.filter(project => project.isActive).length ?? 0;


    return (
        <div className={styles.panelContainer}>
            <div className={styles.card}>
                <h4>Total Proyectos</h4>
                <p>{totalProjects}</p>
            </div>
            <div className={styles.card}>
                <h4>Proyectos Activos</h4>
                <p>{activeProjects}</p>
            </div>

        </div>
    );
}

export default Panel;

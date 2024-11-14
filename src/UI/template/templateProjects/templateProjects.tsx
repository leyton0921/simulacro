import TableProjects from "@/UI/organisms/tableProjects/projects"
import { IProjectsResponse } from "@/app/core/application/dto/projects/projects-response.dto";
import styles from "./templateProjects.module.scss"
import Pagination from "@/UI/molecules/pagination/pagination";

interface IProps {
    data: IProjectsResponse;
}

const TemplateProjects = ({data}:IProps) => {
    return (
        <div className={styles.container}>
            <div>
                <h3>Lista de proyectos</h3>
            </div>
            <div className={styles.containerAccions}>
                <input type="text"  />
                <Pagination data={data}/>
            </div>
            <div>
            <TableProjects data={data}/>
            </div>

        </div>
    )
}

export default TemplateProjects
'use client'
import { IProjectsResponse } from "@/app/core/application/dto/projects/projects-response.dto";
import styles from "./projects.module.scss";
import { ProjectsServices } from "@/app/infrastructure/services/projects.service";
import { useRouter } from "next/navigation";


interface IProps {
  data: IProjectsResponse;
}

const TableProjects = ({ data}: IProps) => {
  const projectsService = new ProjectsServices();
    const router = useRouter()
    const handleDelete = async (id:number) =>{
        const isConfirm = confirm("estas seguro de eliminar este proyecto")
        if(!isConfirm) return

        try{
            await fetch(`/api/project/delete/${id}`,{
                method:'DELETE'
            });
            console.log("Eliminado")
            router.refresh();
        }catch(error){
            console.log(error);
        }
    }
  return (
    <table className={styles.projectsTable}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Fecha de Inicio</th>
          <th>Fecha de Fin</th>
          <th>Estado</th>
          <th>Organizador</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((project) => (
          <tr key={project.id}>
            <td>{project.title}</td>
            <td>{project.description}</td>
            <td>{formatDate(project.startDate)}</td>
            <td>{formatDate(project.endDate)}</td>
            <td>
              <p className={project.isActive ? styles.activeStatus : styles.inactiveStatus}>
                {project.isActive ? "Activo" : "Inactivo"}
              </p>
            </td>
            <td>{project.organizer.name}</td>
            <td className={styles.accions}>
              <div className={styles.divAccions}>
                <button className={styles.editButton}>Editar</button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(project.id)} 
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const formatDate = (date: Date): string => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default TableProjects;

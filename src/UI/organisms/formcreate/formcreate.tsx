"use client";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ICreateProject } from "@/app/core/application/dto/projects/create-project.dto";
import { FormField } from "@/UI/molecules/common/formField";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from './formcreate.module.scss';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ProjectsServices } from "@/app/infrastructure/services/projects.service";


interface IProps {
    closeModal: () => void;
}

const projectSchema = yup.object().shape({
    title: yup
        .string()
        .required('El título del proyecto es requerido'),
    description: yup
        .string()
        .required('La descripción del proyecto es requerida'),
    startDate: yup
        .date()
        .required('La fecha de inicio es requerida'),
    endDate: yup
        .date()
        .required('La fecha de fin es requerida')
})


const ProjectForm = ({  closeModal }: IProps) => {
    const router = useRouter();
    const useService = new ProjectsServices()
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue

    } = useForm<ICreateProject>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(projectSchema),
    })

    const handleProject = async (data: ICreateProject) => {
        const response = await fetch('/api/project/create', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    
        if (!response.ok) {
            console.error('Error al enviar el formulario:', response.statusText);
            return;
        }
    
        const result = await response.json();
        console.log('Respuesta del servidor:', result);
    
        router.refresh(); 
        closeModal();
    };
    

    return (
        <form className={styles.form} onSubmit={handleSubmit(handleProject)}>
            <button onClick={closeModal} className={styles.close}><IoIosCloseCircleOutline size={25}/></button>


            <h1  className={styles.title}>Proyectos</h1>

            <FormField<ICreateProject>
                control={control}
                type="text"
                label="Título"
                name="title"
                error={errors.title}
                placeholder="Ingresa el título del proyecto"
            />

            <FormField<ICreateProject>
                control={control}
                type="text"
                label="Descripción"
                name="description"
                error={errors.description}
                placeholder="Ingresa la decripción del proyecto"
            />

            <FormField<ICreateProject>
                control={control}
                type="date"
                label="Fecha inicio"
                name="startDate"
                error={errors.startDate}
                placeholder="Ingresa la fecha de inicio del proyecto"
            />

            <FormField<ICreateProject>
                control={control}
                type="date"
                label="Fecha fin"
                name="endDate"
                error={errors.startDate}
                placeholder="Ingresa la fecha de fin del proyecto"
            />

            <button className="primary-big" type="submit">Enviar</button>

        </form>
    )
}

export default ProjectForm;
import React from 'react'
import TemplateProjects from '@/UI/template/templateProjects/templateProjects';
import { ProjectsServices } from '@/app/infrastructure/services/projects.service';
import Panel from '@/UI/organisms/panel/panel';
interface IProps {
  searchParams: Promise<{
    page: string;
    size: string;
  }>;
}



export default async function Projects({ searchParams }: IProps) {

  const useService = new ProjectsServices()

  const params = await searchParams;

  const page = params.page ? parseInt(params.page) : 1;
  const size = params.size ? parseInt(params.size) : 3;

  const data = await useService.findAllProjects(page, size)
  console.log(data)

  return (
    <div>
      <Panel data={data}/>
      <TemplateProjects data={data} />
    </div>
  )
}

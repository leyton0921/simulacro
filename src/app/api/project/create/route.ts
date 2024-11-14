import { NextResponse } from 'next/server';
import { ICreateProject } from '@/app/core/application/dto/projects/create-project.dto';
import { ProjectsServices } from '@/app/infrastructure/services/projects.service';

export async function POST(req: Request) {
  const service = new ProjectsServices();

  try {
    const data: ICreateProject = await req.json();
    const response = await service.create(data);

    return NextResponse.json(response, {status: 200})

  
  } catch (error) {
    console.error('Error en la creación del proyecto:', error);
    return NextResponse.json({ message: 'Error al procesar la solicitud' }, { status: 500 });
  }
}

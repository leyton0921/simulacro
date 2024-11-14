import { NextResponse } from "next/server";
import { ProjectsServices } from "@/app/infrastructure/services/projects.service";


export async function DELETE(_: Request, {params} : {params: Promise<{id: number}>}) {
    const service = new ProjectsServices();

    try {
        const id = (await params).id
        await service.deleteProject(id);

        return NextResponse.json({message: 'Eliminado'}, {status: 200});

    } catch (error) {
        console.log('Error: ', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
        
    }
}
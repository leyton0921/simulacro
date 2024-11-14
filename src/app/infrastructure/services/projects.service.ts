import { IProjectsResponse } from "@/app/core/application/dto/projects/projects-response.dto";
import { HttpClient } from "../utils/client-http";
import { IUsersResponse } from "@/app/core/application/dto/projects/organizadors-response.dto";
import { ICreateProject } from "@/app/core/application/dto/projects/create-project.dto";
import { IResponseCreateProject } from "@/app/core/application/dto/projects/create-project.dto";
import { IDeleteProject } from "@/app/core/application/dto/projects/delete.response.dto";

export class ProjectsServices {
  private clientHttp: HttpClient;

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async findAllProjects(page: number = 0, size: number = 0) {
    try {
      const response = this.clientHttp.get<IProjectsResponse>(`projects?page=${page}&size=${size}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAllUsers() {
    try {
      const response = this.clientHttp.get<IUsersResponse>("users");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(body: ICreateProject) {
    try {
      const response = this.clientHttp.post<IResponseCreateProject, ICreateProject>('projects', body);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProject(id: number): Promise<void> {
    try {
      const response = await this.clientHttp.delete(`projects/${id}`);
      return response;
      
    } catch (error) {
      console.error('Error en la eliminación del proyecto:', error);
      throw error;
    }
  }


}
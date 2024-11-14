import { ILoginRequest } from "../dto/auth/login-request.dto";
import { ILoginResponse } from "../dto/auth/login-response.dto";

export interface IPauth{
    /**
     * 
     * @param {ILoginRequest} 
     * @param {ILoginResponse} 
     * @returns {Promise<ILoginResponse>}
     * @throws {Error}
     * 
     */
    login(req:ILoginRequest):Promise<ILoginResponse>
}
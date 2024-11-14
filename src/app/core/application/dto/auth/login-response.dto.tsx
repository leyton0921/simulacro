export interface ILoginResponse {
    name: string;
    token: string;
    message: string;
    data: {
        access_token: string; 
        user: {
            email: string;
            sub: string; 
            role: string;
            photo: string;
        };
    };
}

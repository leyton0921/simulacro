export interface IUsersResponse {
    statusCode: number;
    message:    string;
    data:       Datum[];
}

export interface Datum {
    id:       number;
    email:    string;
    password: string;
    name:     string;
    role:     string;
    photo:    string;
}

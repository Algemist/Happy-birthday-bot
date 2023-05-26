export interface Employee {
    name: string;
    email: string;
    birthday: string;
}

export interface ApiResponse {
    rukovoditel: string;
    sotrudniki: Employee[];
}

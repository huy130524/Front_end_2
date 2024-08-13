export type User ={
    id: number;
    Username: string;
    email: string;
    password: string;
}

export type UsersInput = Omit< User,'id'>;

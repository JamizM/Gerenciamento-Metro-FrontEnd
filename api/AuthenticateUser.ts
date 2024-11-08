import axios from "axios";

interface User {
    id: string;
    firstName: string;
    password: string;
    email: string;
}

export default async function listarUsuario(email: string): Promise<User> {
    const base64Credentials = btoa("Admin:Admin");
    try {
        const response = await axios.get<User>(
            `http://xxx.xx.x.xx:8080/api/auth/user/${email}`,
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Usuario: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ", error);
        throw error;
    }
}

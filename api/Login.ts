import axios from "axios";

interface User {
    id: number;
    firstName: string;
    email: string;
    password?: string;
}
export default async function login(emailUser: string, passwordUser: string) {
    const url = `http://192.168.0.55:8080/api/Users?email=${emailUser}`;
    const base64Credentials = btoa("Admin:Admin");

    try {
        const response = await axios.get<User[]>(url, {
            headers: {
                Authorization: `Basic ${base64Credentials}`,
                "Content-Type": "application/json"
            }
        });

        const user = response.data[0];

        if (user) {
            const password = user.password;
            if (password == passwordUser) {
                console.log("Login bem-sucedido!");
                return true;
            } else {
                console.log("Senha incorreta.");
                return false;
            }
        } else {
            console.log("Usuário não encontrado.");
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

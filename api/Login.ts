import axios from "axios";

interface User {
    id: number;
    firstName: string;
    email: string;
    password?: string;
}
export default async function Login(emailUser: string, passwordUser: string) {
    const url = `http://xxx.xxx.x.xx:8080/api/Users?email=${emailUser}`;
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
        console.error("Erro ao buscar Usuário:", error);
        return false;
    }
}

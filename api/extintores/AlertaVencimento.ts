import axios from "axios";

export default async function AlertaExtintores() {
    const base64Credentials = btoa("Admin:Admin");

    try {
        const response = await axios.get(
            `http://192.168.238.143:8080/api/Extinguishers/Search-Extinguisher-By-Expiration-Date`, //url
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Lista de extintores: ", response.data);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Erro: ", error.message);
        }

        if ((error as any).response) {
            const axiosError = error as any;
            console.log(
                "Erro no servidor: ",
                axiosError.response.status,
                axiosError.response.data
            );
        } else if ((error as any).request) {
            console.log("Nenhuma resposta recebida: ", (error as any).request);
        } else {
            console.log("Erro ao configurar a requisição: ", error);
        }
    }
}

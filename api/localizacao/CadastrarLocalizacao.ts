import axios from "axios";

interface Localizacao {
    estacao: string;
    plataforma: string;
    descricao: string;
}

export default async function cadastrarLocalizacao(localizacao: Localizacao) {
    const base64Credentials = btoa("Admin:Admin");
    const url = "http://xxx.xxx.x.xx:8080/api/Locations"; 

    try {
        const response = await axios.post(
            url,
            {
                estacao: localizacao.estacao,
                plataforma: localizacao.plataforma,
                descricao: localizacao.descricao,
            },
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Localização cadastrada com sucesso:", response.statusText);
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

import axios from "axios";

export default async function cadastrarExtintor(objetoExtintor: Object) {
    const base64Credentials = btoa("Admin:Admin");
    try {
        const response = await axios.post(
            `http://192.168.0.41:8080/api/Extinguishers`, //url
            objetoExtintor,
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Enviado com sucesso: " + response.statusText);
    } catch (error: unknown) {
        // Definindo o tipo do erro como unknown
        // Verificando se o erro possui a propriedade 'response'
        if (error instanceof Error) {
            // Se o erro for uma instância de Error, imprime a mensagem
            console.log("Erro: ", error.message);
        }

        if ((error as any).response) {
            // O servidor respondeu com um código de status fora do range 2xx
            const axiosError = error as any; // Fazendo uma asserção de tipo
            console.log(
                "Erro no servidor: ",
                axiosError.response.status,
                axiosError.response.data
            );
        } else if ((error as any).request) {
            // A requisição foi feita, mas nenhuma resposta foi recebida
            console.log("Nenhuma resposta recebida: ", (error as any).request);
        } else {
            // Outro tipo de erro ocorreu
            console.log("Erro ao configurar a requisição: ", error);
        }
    }
}

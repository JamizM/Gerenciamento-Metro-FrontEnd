import axios from "axios";
import { Buffer } from "buffer";

async function GerarQrCodePorExtintor(extinguisherId: string) {
    const base64Credentials = btoa("Admin:Admin");
    const url = `http://192.168.238.143:8080/api/Extinguishers/${extinguisherId}/qrcode`; //url

    console.log("ID do extintor:", extinguisherId);

    try {
        const response = await axios.get(url, {
            responseType: "arraybuffer",
            headers: {
                Authorization: `Basic ${base64Credentials}`,
                "Content-Type": "application/json"
            }
        });

        if (response.data instanceof ArrayBuffer) {
            const bytes = new Uint8Array(response.data);
            const binaryString = bytes.reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
            );
            const qrcode = Buffer.from(binaryString, "binary").toString(
                "base64"
            );
            return qrcode;
        } else {
            console.error("Formato de resposta inesperado:", response.data);
            return null;
        }
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

export default GerarQrCodePorExtintor;

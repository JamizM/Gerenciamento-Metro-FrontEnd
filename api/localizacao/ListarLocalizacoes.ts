import axios from "axios";

interface Localization {
    area: string;
    subwayStation: string;
    detailedLocation: string;
}

export default async function ListLocalizations(): Promise<Localization[]> {
    const base64Credentials = btoa("Admin:Admin");

    try {
        const response = await axios.get<Localization[]>(
            `http://192.168.238.143:8080/api/Localizations`, //url
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Lista de localizacoes: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao listar: ", error);
        throw error;
    }
}

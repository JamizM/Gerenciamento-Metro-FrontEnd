import axios from "axios";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    extinguisher: { id: string };
    description: string;
    responsible: string;
}

export default async function LocalizarHistoricoManutencaoPeloId(
    idManutention: number
): Promise<HistoricManutention> {
    const base64Credentials = btoa("Admin:Admin");
    try {
        const response = await axios.get<HistoricManutention>(
            `http://192.168.238.143:8080/api/HistoricManutention/${idManutention}`,
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Erro ao achar historico: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro: ", error);
        throw error;
    }
}

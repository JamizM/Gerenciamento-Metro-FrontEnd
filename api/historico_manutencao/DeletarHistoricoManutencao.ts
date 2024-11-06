import axios from "axios";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    extinguisher: { id: string };
    description: string;
    responsible: string;
}

export default async function DeletarHistoricoManutencao(
    idManutention: number
): Promise<HistoricManutention> {
    const base64Credentials = btoa("Admin:Admin");
    try {
        const response = await axios.delete<HistoricManutention>(
            `http://xxx.xx.x.xx:8080/api/HistoricManutention/${idManutention}`,
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Extintor Deletado: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao achar extintor: ", error);
        throw error;
    }
}

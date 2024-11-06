import axios from "axios";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    extinguisher: { id: string };
    description: string;
    responsible: string;
}

export default async function AlterarHistoricoManutencao(
    idManutention: number,
    historicManutentionData: Partial<HistoricManutention>
): Promise<HistoricManutention> {
    const base64Credentials = btoa("Admin:Admin");
    try {
        const response = await axios.put<HistoricManutention>(
            `http://xxx.xx.x.xx:8080/api/HistoricManutention/${idManutention}`, //url
            historicManutentionData,
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Alterações feitas: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar extintor: ", error);
        throw error;
    }
}

import axios from "axios";

interface Extinguisher {
    id: number;
    extinguisherType: string;
    capacity: string;
    lastInspectionDate: string;
    manufacturerCode: string;
    expirationDate: string;
    lastRechargeDate: string;
    teamCode: number;
    nextInspection: string;
    extinguisherStatus: string;
}

export default async function DeletarExtintorPeloId(
    extinguisherId: string,
    userName: string,
    reason: string
): Promise<Extinguisher> {
    const base64Credentials = btoa("Admin:Admin");
    try {
        const response = await axios.delete<Extinguisher>(
            `http://xxx.xx.x.xx:8080/api/Extinguishers/${extinguisherId}?userName=${userName}&reason=${reason}`,
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

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

export default async function AlterarExtintorPeloID(
    extinguisherId: string,
    extinguisherData: Partial<Extinguisher>
): Promise<Extinguisher> {
    const base64Credentials = btoa("Admin:Admin");
    try {
        const response = await axios.put<Extinguisher>(
            `http://192.168.0.41:8080/api/Extinguishers/${extinguisherId}`, //url
            extinguisherData,
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Alterações fei: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar extintor: ", error);
        throw error;
    }
}

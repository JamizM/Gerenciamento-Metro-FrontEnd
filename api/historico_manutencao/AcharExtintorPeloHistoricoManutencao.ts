import axios from "axios";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    extinguisher: { id: string };
    description: string;
    responsible: string;
}

export default async function findExtinguisherByHistoricManutention(
    id: string
) {
    const base64Credentials = btoa("Admin:Admin");
    const url = `http://xxx.xx.x.xx:8080/api/HistoricManutention/extinguisher?extinguisher=${id}`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Basic ${base64Credentials}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

import axios from "axios";

export default async function ManutencaoPreventiva(
    extinguisherId: string,
    months: number
) {
    const base64Credentials = btoa("Admin:Admin");

    try {
        const response = await axios.post(
            `http://xxx.xx.x.xx:8080/api/Extinguishers/Schedule-Regular-Inspections?extinguisherId=${extinguisherId}&months=${months}`, //url
            {},
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Resposta: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro: ", error);
        throw error;
    }
}

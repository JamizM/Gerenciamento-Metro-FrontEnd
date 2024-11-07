import axios from "axios";
export default async function findExtinguisherBySublocalization(
    localizacao: String
) {
    const base64Credentials = btoa("Admin:Admin");
    const url = `192.168.238.143:8080/api/Extinguishers/Search-Extinguisher-By-Localization?detailedLocation=${localizacao}`;
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

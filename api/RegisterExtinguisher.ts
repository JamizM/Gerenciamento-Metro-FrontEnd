import axios from "axios";

export default async function registerExtinguisher(objetoExtintor: Object) {
    const base64Credentials = btoa("Admin:Admin");
    try {
        const response = await axios.post(
            "http://xxx.xx.x.xx:8080/api/Extinguishers",
            objetoExtintor,
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return "Enviado com sucesso!";
    } catch (error) {
        return "Algo deu errado";
    }
}

import axios from "axios";

export default async function cadastrarExtintor(objetoExtintor: Object) {
    const base64Credentials = btoa("Admin:Admin");
    try {
        axios
            .post("http://localhost:8080/api/Extinguishers", objetoExtintor, {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            })
            .then((response) =>
                console.log("Enviado com sucesso: " + response.statusText)
            );
    } catch (error) {
        console.log("Erro : " + error);
    }
}

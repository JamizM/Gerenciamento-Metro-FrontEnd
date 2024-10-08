import axios from "axios";

// Função que recebe como parâmetro o id da localização no banco, ele puxa da api com o url parametrizado e devolve todos os dados, ou um erro,
// então, após puxar os dados, tratá-los
export default async function PuxarExtintoresPorEstacao(localizacao: String) {
    const url = `http://localhost:8080/api/Extinguishers?localization_id=${localizacao}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return console.error("Erro ao buscar extintores:", error);
    }
}

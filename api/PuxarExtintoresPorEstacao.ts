import { int } from "@zxing/library/esm/customTypings";
import axios from "axios";
interface Extinguisher {
    id: string; // Correspondente ao campo 'id'

    extinguisherType: string; // Tipo de extintor, anotado como NotNull

    capacity: number; // Capacidade do extintor, anotado como NotNull

    manufacturerCode: string; // Código do fabricante (usando LocalDate), transformado para string

    expirationDate: string; // Data de expiração, usando LocalDate (ISO format)

    lastRechargeDate: string; // Data da última recarga, LocalDate

    teamCode: number; // Código da equipe, NotNull

    nextInspection: string; // Próxima inspeção, LocalDate

    extinguisherStatus: string; // Status do extintor, NotNull

    localization: string; // Relacionamento ManyToOne com Localization
}

// Função que recebe como parâmetro o id da localização no banco, ele puxa da api com o url parametrizado e devolve todos os dados, ou um erro,
// então, após puxar os dados, tratá-los
export default async function PuxarExtintoresPorEstacao(localizacao: int) {
    const base64Credentials = btoa("Admin:Admin");
    const url = `http://192.168.0.41:8080/api/Extinguishers?localization=${localizacao}`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Basic ${base64Credentials}`,
                "Content-Type": "application/json"
            }
        });
        const extinguishers: any = response.data || [];
        return extinguishers.length;
    } catch (error) {
        console.error("Erro ao buscar extintores:", error);
        return 0;
    }
}

PuxarExtintoresPorEstacao(1).then((result) => {
    console.log("Quantidade de extintores:", result);
});

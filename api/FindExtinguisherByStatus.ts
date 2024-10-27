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
export default async function FindExtinguisherByStatus(condicao: String) {
    const base64Credentials = btoa("Admin:Admin");
    const url = `http://192.168.0.55:8080/api/Extinguishers/Search-Extinguisher-By-Status?extinguisherStatus=${condicao}`;
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

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

export default async function listarExtintores(): Promise<Extinguisher[]> {
    const base64Credentials = btoa("Admin:Admin");

    try {
        const response = await axios.get<Extinguisher[]>(
            `http://192.168.238.143:8080/api/Extinguishers`, //url
            {
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("Lista de extintores: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao listar extintores: ", error);
        throw error;
    }
}

import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, IconButton } from "react-native-paper";

import listarExtintores from "@/api/extintores/ListarExtintores";

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

const ListExtinguishersPage: React.FC = () => {
    const [extinguishers, setExtinguishers] = useState<Extinguisher[]>([]);
    const [responseMessage, setResponseMessage] = useState<string>("");
    const navigation = useNavigation();

    const ListarExtintores = async () => {
        try {
            const response = await listarExtintores();
            setExtinguishers(response);
            setResponseMessage("Extintores listados com sucesso!");
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Erro: ", error.message);
                setResponseMessage(`Erro: ${error.message}`);
            }
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    size={24}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Extintores</Text>
            </View>
            <Button mode="contained" onPress={ListarExtintores}>
                Listar Extintores
            </Button>
            <Text style={styles.message}>{responseMessage}</Text>
            <View style={styles.extinguishersList}>
                {extinguishers.map((extinguisher) => (
                    <View
                        key={extinguisher.id}
                        style={styles.extinguisherDetails}
                    >
                        <Text style={styles.detailsTitle}>
                            Detalhes do Extintor
                        </Text>
                        <Text>ID: {extinguisher.id}</Text>
                        <Text>Tipo: {extinguisher.extinguisherType}</Text>
                        <Text>
                            Data de Validade: {extinguisher.expirationDate}
                        </Text>
                        <Text>Capacidade: {extinguisher.capacity}</Text>
                        <Text>
                            Código do Fabricante:{" "}
                            {extinguisher.manufacturerCode}
                        </Text>
                        <Text>
                            Última Recarga: {extinguisher.lastRechargeDate}
                        </Text>
                        <Text>
                            Próxima Inspeção: {extinguisher.nextInspection}
                        </Text>
                        <Text>Status: {extinguisher.extinguisherStatus}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f8f8"
    },
    message: {
        marginVertical: 10,
        fontSize: 16,
        textAlign: "center",
        color: "green"
    },
    extinguishersList: {
        flexDirection: "column",
        marginVertical: 10
    },
    extinguisherDetails: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: "#e0e0e0"
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
        textDecorationLine: "underline"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        right: 16,
        padding: 10,
        position: "relative"
    }
});

export default ListExtinguishersPage;

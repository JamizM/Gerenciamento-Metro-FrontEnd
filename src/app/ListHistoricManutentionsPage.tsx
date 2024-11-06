import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, IconButton } from "react-native-paper";

import listarHistoricoManutencao from "@/api/historico_manutencao/ListarHistoricoManutencao";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    extinguisher: { id: string };
    description: string;
    responsible: string;
}

const ListHistoricManutentionPage: React.FC = () => {
    const [historicManutentions, setHistoricManutentions] = useState<
        HistoricManutention[]
    >([]);
    const [responseMessage, setResponseMessage] = useState<string>("");
    const navigation = useNavigation();

    const ListarHistoricos = async () => {
        try {
            const response = await listarHistoricoManutencao();
            setHistoricManutentions(response);
            setResponseMessage(
                "Historicos de Manutenção listados com sucesso!"
            );
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
                <Text style={styles.title}>Histórico de Manutenções</Text>
            </View>
            <Button mode="contained" onPress={ListarHistoricos}>
                Listar Históricos
            </Button>
            <Text style={styles.message}>{responseMessage}</Text>
            <View style={styles.historicList}>
                {historicManutentions.map((historicManutention) => (
                    <View
                        key={historicManutention.idManutention}
                        style={styles.historicDetails}
                    >
                        <Text style={styles.detailsTitle}>
                            Detalhes do Extintor
                        </Text>
                        <Text>ID: {historicManutention.idManutention}</Text>
                        <Text>
                            Data de Manutenção:{" "}
                            {historicManutention.maintenanceDate}
                        </Text>
                        <Text>
                            Descrição: {historicManutention.description}
                        </Text>
                        <Text>
                            Responsável: {historicManutention.responsible}
                        </Text>
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
    historicList: {
        flexDirection: "column",
        marginVertical: 10
    },
    historicDetails: {
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

export default ListHistoricManutentionPage;

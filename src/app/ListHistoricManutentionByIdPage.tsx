import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Button, IconButton } from "react-native-paper";

import LocalizarHistoricoManutencaoPeloId from "@/api/historico_manutencao/ListarHistoricoManutencaoPeloId";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    extinguisher: { id: string };
    description: string;
    responsible: string;
}

const HistoricManutentionByIdPage = () => {
    const [idManutention, setIdManutention] = useState("");
    const [historicManutention, setHistoricManutention] =
        useState<HistoricManutention | null>(null);
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const findHistoricManuntentionById = async () => {
        try {
            const response = await LocalizarHistoricoManutencaoPeloId(
                parseInt(idManutention)
            );
            setHistoricManutention(response as unknown as HistoricManutention);
            setError("");
            console.log("Detalhes do historico:", response);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Erro: ", error.message);
                setError("Historico não encontrado");
                setHistoricManutention(null);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    size={24}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Localizar Histórico</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Digite o ID do histórico de manutenção"
                value={idManutention}
                onChangeText={setIdManutention}
                keyboardType="default"
            />
            <Button mode="contained" onPress={findHistoricManuntentionById}>
                Localizar
            </Button>
            {error ? (
                <View style={styles.errorBox}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            ) : null}
            {historicManutention && (
                <View style={styles.historicDetails}>
                    <Text style={styles.detailsTitle}>
                        Detalhes do Extintor
                    </Text>
                    <Text>ID: {historicManutention.idManutention}</Text>
                    <Text>
                        Data de Manutenção:{" "}
                        {historicManutention.maintenanceDate}
                    </Text>
                    <Text>Descrição: {historicManutention.description}</Text>
                    <Text>Responsável: {historicManutention.responsible}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f8f8f8"
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8
    },
    errorBox: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    errorText: {
        color: "black"
    },
    historicDetails: {
        padding: 16,
        backgroundColor: "gray",
        borderRadius: 8,
        marginTop: 20
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
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

export default HistoricManutentionByIdPage;

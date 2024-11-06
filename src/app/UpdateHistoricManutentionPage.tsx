import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";
import { Button, IconButton } from "react-native-paper";

import AlterarHistoricoManutencao from "@/api/historico_manutencao/AlterarHistoricoManutencao";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    description: string;
    responsible: string;
}

const UpdateHistoricManutention = () => {
    const [extinguisherData, setExtinguisherData] = useState<
        Partial<HistoricManutention>
    >({});
    const [message, setMessage] = useState("");
    const navigation = useNavigation();

    const handleInputChange = (
        field: keyof HistoricManutention,
        value: string
    ) => {
        setExtinguisherData((prevData) => ({
            ...prevData,
            [field]: field === "idManutention" ? parseInt(value, 10) : value
        }));
    };

    const handleSave = async () => {
        try {
            const { idManutention, ...updatedData } = extinguisherData;

            if (typeof idManutention === "number" && !isNaN(idManutention)) {
                console.log("ID do histórico de manutenção:", idManutention);
                console.log("Dados enviados para API:", updatedData);
                const updatedExtinguisher = await AlterarHistoricoManutencao(
                    idManutention,
                    updatedData
                );
                setMessage("Histórico de manutenção atualizado com sucesso!");
                console.log(
                    "Dados atualizados do histórico:",
                    updatedExtinguisher
                );
            } else {
                setMessage(
                    "ID de manutenção é necessário e deve ser um número."
                );
            }
        } catch (error) {
            console.error("Erro ao atualizar:", error);
            setMessage("Erro ao atualizar histórico.");
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
                <Text style={styles.title}>
                    Alterar Histórico de Manutenção
                </Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="ID do Histórico de Manutenção"
                keyboardType="numeric"
                value={
                    extinguisherData.idManutention
                        ? extinguisherData.idManutention.toString()
                        : ""
                }
                onChangeText={(text) =>
                    handleInputChange("idManutention", text)
                }
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Manutenção"
                value={extinguisherData.maintenanceDate || ""}
                onChangeText={(text) =>
                    handleInputChange("maintenanceDate", text)
                }
            />
            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={extinguisherData.description || ""}
                onChangeText={(text) => handleInputChange("description", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Responsável"
                value={extinguisherData.responsible || ""}
                onChangeText={(text) => handleInputChange("responsible", text)}
            />
            <Button mode="contained" onPress={handleSave}>
                Salvar Alterações
            </Button>
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f8f8f8"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        right: -20,
        textDecorationLine: "underline"
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8
    },
    message: {
        marginTop: 20,
        fontSize: 16,
        color: "green",
        textAlign: "center"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        position: "relative"
    }
});

export default UpdateHistoricManutention;

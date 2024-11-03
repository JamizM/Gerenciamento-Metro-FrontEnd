import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";
import { Button, IconButton } from "react-native-paper";

import AlterarExtintorPeloID from "@/api/extintores/AlterarExtintor";

interface Extinguisher {
    id: string;
    extinguisherType: string;
    capacity: number;
    manufacturerCode: string;
    expirationDate: string;
    lastRechargeDate: string;
    teamCode: number;
    nextInspection: string;
    extinguisherStatus: string;
    localization: {
        id: number;
    };
}

const EditExtinguisherPage = () => {
    const [extinguisherId, setExtinguisherId] = useState("");
    const [extinguisherData, setExtinguisherData] = useState<
        Partial<Extinguisher>
    >({
        localization: { id: 1 }
    });
    const [message, setMessage] = useState("");
    const navigation = useNavigation();

    const handleInputChange = (field: keyof Extinguisher, value: string) => {
        setExtinguisherData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleSave = async () => {
        try {
            const updatedData = {
                ...extinguisherData,
                localization: extinguisherData.localization || { id: 1 }
            };

            const updatedExtinguisher = await AlterarExtintorPeloID(
                extinguisherId,
                updatedData
            ); // Ajustar a função AlterarExtintorPeloID para aceitar a estrutura correta
            setMessage("Extintor atualizado com sucesso!");
            console.log("Dados atualizados do extintor:", updatedExtinguisher);
        } catch (error) {
            console.error("Erro ao atualizar extintor:", error);
            setMessage("Erro ao atualizar extintor.");
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
                <Text style={styles.title}>Alterar Extintor</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="ID do extintor"
                value={extinguisherId}
                onChangeText={setExtinguisherId}
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo de extintor"
                value={extinguisherData.extinguisherType || ""}
                onChangeText={(text) =>
                    handleInputChange("extinguisherType", text)
                }
            />
            <TextInput
                style={styles.input}
                placeholder="Capacidade"
                value={extinguisherData.capacity?.toString() || ""}
                onChangeText={(text) => handleInputChange("capacity", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Código do Fabricante"
                value={extinguisherData.manufacturerCode || ""}
                onChangeText={(text) =>
                    handleInputChange("manufacturerCode", text)
                }
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Validade"
                value={extinguisherData.expirationDate || ""}
                onChangeText={(text) =>
                    handleInputChange("expirationDate", text)
                }
            />
            <TextInput
                style={styles.input}
                placeholder="Última Recarga"
                value={extinguisherData.lastRechargeDate || ""}
                onChangeText={(text) =>
                    handleInputChange("lastRechargeDate", text)
                }
            />
            <TextInput
                style={styles.input}
                placeholder="Código da Equipe"
                value={extinguisherData.teamCode?.toString() || ""}
                onChangeText={(text) => handleInputChange("teamCode", text)}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Próxima Inspeção"
                value={extinguisherData.nextInspection || ""}
                onChangeText={(text) =>
                    handleInputChange("nextInspection", text)
                }
            />
            <TextInput
                style={styles.input}
                placeholder="Status do Extintor"
                value={extinguisherData.extinguisherStatus || ""}
                onChangeText={(text) =>
                    handleInputChange("extinguisherStatus", text)
                }
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
        right: -40
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

export default EditExtinguisherPage;

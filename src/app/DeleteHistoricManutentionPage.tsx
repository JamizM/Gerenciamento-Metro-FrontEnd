import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import { Button, IconButton } from "react-native-paper";

import DeletarHistoricoManutencao from "@/api/historico_manutencao/DeletarHistoricoManutencao";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    extinguisher: { id: string };
    description: string;
    responsible: string;
}

const DeleteHistoricManutentionPage = () => {
    const [idManutention, setIdManutention] = useState("");
    const [message, setMessage] = useState("");
    const navigation = useNavigation();

    const handleDelete = () => {
        Alert.alert(
            "Confirmar Deleção",
            "Tem certeza que deseja deletar histórico?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Confirmar",
                    onPress: handleConfirmDelete,
                    style: "destructive"
                }
            ]
        );
    };

    const handleConfirmDelete = async () => {
        try {
            await DeletarHistoricoManutencao(Number(idManutention));
            setMessage("Historico de Manutencao deletado com sucesso!");
        } catch (error) {
            console.error("Erro ao deletar:", error);
            setMessage("Erro ao deletar Historico.");
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
                <Text style={styles.title}>
                    Deletar Historico de Manutenção
                </Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="ID do histórico de manutenção"
                value={idManutention}
                onChangeText={setIdManutention}
            />
            <Button mode="contained" onPress={handleDelete}>
                Deletar Extintor
            </Button>
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
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
        left: 15,
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

export default DeleteHistoricManutentionPage;

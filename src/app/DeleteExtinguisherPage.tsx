import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import { Button, IconButton } from "react-native-paper";

import DeletarExtintorPeloId from "@/api/extintores/DeletarExtintor";

const DeleteExtinguisherPage = () => {
    const [extinguisherId, setExtinguisherId] = useState("");
    const [userName, setUserName] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");
    const navigation = useNavigation();

    const handleDelete = () => {
        Alert.alert(
            "Confirmar Deleção",
            "Tem certeza que deseja deletar o extintor?",
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
            await DeletarExtintorPeloId(extinguisherId, userName, reason);
            setMessage("Extintor deletado com sucesso!");
        } catch (error) {
            console.error("Erro ao deletar extintor:", error);
            setMessage("Erro ao deletar extintor.");
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
                <Text style={styles.title}>Deletar Extintor</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="ID do extintor"
                value={extinguisherId}
                onChangeText={setExtinguisherId}
            />

            <Text style={styles.text}>Escreva o motivo</Text>

            <TextInput
                style={styles.input}
                placeholder="Coloque seu nome"
                value={userName}
                onChangeText={setUserName}
            />
            <TextInput
                style={styles.input}
                placeholder="Motivo para exclusão"
                value={reason}
                onChangeText={setReason}
            />
            <Button
                mode="contained"
                onPress={handleDelete}
                style={styles.button}
            >
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
        left: 40,
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
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8
    },
    button: {
        position: "absolute",
        bottom: 20,
        left: 16,
        right: 16
    }
});

export default DeleteExtinguisherPage;

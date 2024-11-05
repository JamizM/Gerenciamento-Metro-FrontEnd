import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import ManutencaoPreventiva from "@/api/extintores/ManutencaoPreventiva";

const MaintenancePreventivePage: React.FC = () => {
    const [extintorId, setExtintorId] = useState("");
    const [meses, setMeses] = useState("");
    const [response, setResponse] = useState<string | null>(null);
    const navigation = useNavigation();

    const handleButtonClick = async () => {
        try {
            const result = await ManutencaoPreventiva(
                extintorId,
                parseInt(meses)
            );
            setResponse(result as string);
            Alert.alert("Resposta", JSON.stringify(result));
        } catch (error) {
            console.error("Erro ao chamar ManutencaoPreventiva:", error);
            setResponse("Erro ao chamar a função");
            Alert.alert("Erro", "Erro ao chamar a função");
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
                    Manutenção Preventiva dos Extintores
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <Text>ID do Extintor:</Text>
                <TextInput
                    style={styles.input}
                    value={extintorId}
                    onChangeText={setExtintorId}
                    placeholder="Digite o ID"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Meses:</Text>
                <TextInput
                    style={styles.input}
                    value={meses}
                    onChangeText={setMeses}
                    keyboardType="numeric"
                    placeholder="Digite em meses"
                />
            </View>
            <View style={styles.line} />
            {response && (
                <View style={styles.responseContainer}>
                    <Text>{response}</Text>
                </View>
            )}
            <View style={styles.buttonContainer}>
                <Button title="Enviar" onPress={handleButtonClick} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    inputContainer: {
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10
    },
    responseContainer: {
        marginTop: 20,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    buttonContainer: {
        marginTop: "auto"
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginBottom: 10,
        width: "90%",
        alignSelf: "center"
    }
});

export default MaintenancePreventivePage;

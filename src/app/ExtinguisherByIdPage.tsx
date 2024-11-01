import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Button, IconButton } from "react-native-paper";

import LocalizarExtintorPorId from "@/api/extintores/ListarExtintorPeloID";

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

const ExtinguisherByIdPage = () => {
    const [extinguisherId, setExtinguisherId] = useState("");
    const [extinguisher, setExtinguisher] = useState<Extinguisher | null>(null);
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const findExtinguisherById = async () => {
        try {
            const response = await LocalizarExtintorPorId(extinguisherId);
            setExtinguisher(response);
            setError("");
            console.log("Detalhes do extintor:", response);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Erro: ", error.message);
                setError("Extintor não encontrado");
                setExtinguisher(null);
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
                <Text style={styles.title}>Localização dos Extintores</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Digite o ID do extintor"
                value={extinguisherId}
                onChangeText={setExtinguisherId}
                keyboardType="default"
            />
            <Button mode="contained" onPress={findExtinguisherById}>
                Localizar
            </Button>
            {error ? (
                <View style={styles.errorBox}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            ) : null}
            {extinguisher && (
                <View style={styles.extinguisherDetails}>
                    <Text style={styles.detailsTitle}>
                        Detalhes do Extintor
                    </Text>
                    <Text>ID: {extinguisher.id}</Text>
                    <Text>Tipo: {extinguisher.extinguisherType}</Text>
                    <Text>Data de Validade: {extinguisher.expirationDate}</Text>
                    <Text>Capacidade: {extinguisher.capacity}</Text>
                    <Text>
                        Código do Fabricante: {extinguisher.manufacturerCode}
                    </Text>
                    <Text>Última Recarga: {extinguisher.lastRechargeDate}</Text>
                    <Text>Próxima Inspeção: {extinguisher.nextInspection}</Text>
                    <Text>Status: {extinguisher.extinguisherStatus}</Text>
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
    extinguisherDetails: {
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

export default ExtinguisherByIdPage;

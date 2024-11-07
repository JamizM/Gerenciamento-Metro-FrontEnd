import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, IconButton } from "react-native-paper";

import ListLocalizations from "@/api/localizacao/ListarLocalizacoes";

interface Localization {
    id: number;
    area: string;
    subwayStation: string;
    detailedLocation: string;
}

const ListLocalizationsPage: React.FC = () => {
    const [localizations, setLocalizations] = useState<Localization[]>([]);
    const [responseMessage, setResponseMessage] = useState<string>("");
    const navigation = useNavigation();

    const ListarLocalizacoes = async () => {
        try {
            const response = await ListLocalizations();
            setLocalizations(response as Localization[]);
            setResponseMessage("Localizações listadas com sucesso!");
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
                <Text style={styles.title}>Localizações Cadastradas</Text>
            </View>
            <Button mode="contained" onPress={ListarLocalizacoes}>
                Listar Localizações
            </Button>
            <Text style={styles.message}>{responseMessage}</Text>
            <View style={styles.localizationList}>
                {localizations.map((localizations) => (
                    <View
                        key={localizations.id}
                        style={styles.localizationDetails}
                    >
                        <Text style={styles.detailsTitle}>Localização</Text>
                        <Text>Linha: {localizations.area}</Text>
                        <Text>Estação: {localizations.subwayStation}</Text>
                        <Text>
                            Localização detalhada:{" "}
                            {localizations.detailedLocation}
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
    localizationList: {
        flexDirection: "column",
        marginVertical: 10
    },
    localizationDetails: {
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

export default ListLocalizationsPage;

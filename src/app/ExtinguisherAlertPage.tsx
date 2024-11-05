import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import AlertaExtintores from "@/api/extintores/AlertaVencimento";

const ExtinguisherAlertPage: React.FC = () => {
    const [extinguishers, setExtinguishers] = useState<string[]>([]);
    const navigation = useNavigation();

    const handleButtonClick = async () => {
        try {
            const result = await AlertaExtintores();
            setExtinguishers(result as string[]);
        } catch (error) {
            console.error("Erro ao chamar a função AlertaExtintores:", error);
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
                <Text style={styles.title}>Alerta Extintores</Text>
            </View>
            <Button title="Buscar Extintores" onPress={handleButtonClick} />
            <FlatList
                data={extinguishers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item}</Text>
                        {item.includes("expirado") && (
                            <View style={styles.expiredIndicator} />
                        )}
                        {item.includes("vencer") && (
                            <View style={styles.expiredIndicatorOrange} />
                        )}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textDecorationLine: "underline",
        left: 40
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    expiredIndicator: {
        width: 10,
        height: 10,
        backgroundColor: "red",
        borderRadius: 5
    },
    expiredIndicatorOrange: {
        width: 10,
        height: 10,
        backgroundColor: "#ff8c00",
        borderRadius: 5
    }
});

export default ExtinguisherAlertPage;

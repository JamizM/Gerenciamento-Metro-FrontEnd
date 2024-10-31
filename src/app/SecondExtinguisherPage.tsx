import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { IconButton } from "react-native-paper";

export default function SecondPage() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <IconButton
                        icon="arrow-left"
                        size={30}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.title}>
                        Administração dos Extintores
                    </Text>
                </View>

                <View style={styles.line} />

                <View style={styles.buttonGroup}>
                    <View style={styles.buttonContainer}>
                        <Link href="/LocationPage" asChild>
                            <Pressable>
                                <Text style={styles.link}>Cadastrar</Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Link href="/GenerateQRCodePage" asChild>
                            <Pressable>
                                <Text>
                                    <Text style={styles.link}>QR Code</Text>
                                </Text>
                            </Pressable>
                        </Link>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Link href="/CameraPage" asChild>
                            <Pressable>
                                <Text style={styles.link}>Escanear QR</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        backgroundColor: "#fff"
    },
    buttonGroup: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingVertical: 6
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        width: 250,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#1E90FF",
        borderRadius: 20,
        marginVertical: 10
    },
    link: {
        fontSize: 35,
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        width: "100%"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        position: "relative"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center"
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginTop: 10,
        width: "80%",
        alignSelf: "center"
    }
});

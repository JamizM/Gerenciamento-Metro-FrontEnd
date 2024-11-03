import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { IconButton } from "react-native-paper";

import MetroSP from "./images/metro-sp";

export default function MainPage() {
    const ImgMetro = require("../../assets/images/LogoImgMetro.png");

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={ImgMetro} style={styles.logoMetro} />
                        <IconButton
                            icon="bell"
                            mode="contained"
                            onPress={() => console.log("Pressed")}
                        />
                        <IconButton
                            icon="account"
                            mode="contained"
                            onPress={() => console.log("Pressed")}
                        />
                    </View>

                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonContainer}>
                            <Link href="/SecondExtinguisherPage" asChild>
                                <Pressable>
                                    <Text style={styles.link}>Extintores</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link href="/ReportPage" asChild>
                                <Pressable>
                                    <Text style={styles.link}>Relatórios</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link href="/#" asChild>
                                <Pressable>
                                    <Text style={styles.link}>Exemplo</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link href="/#" asChild>
                                <Pressable>
                                    <Text style={styles.link}>Exemplo</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link href="/FindExtinguisherByFilter" asChild>
                                <Pressable>
                                    <Text style={styles.link}>
                                        Buscar Extintores
                                    </Text>
                                </Pressable>
                            </Link>
                        </View>
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

    header: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        backgroundColor: "#003DA5"
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
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        width: "100%"
    },
    logoMetro: {
        width: 200,
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        marginRight: "auto",
        top: 2
    }
});

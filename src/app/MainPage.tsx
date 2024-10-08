import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import MetroSP from "./images/metro-sp";

export default function MainPage() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <MetroSP />
                </View>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons
                                name="notifications-outline"
                                size={28}
                                color="#fff"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons
                                name="settings-outline"
                                size={28}
                                color="#fff"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.text} />
                    </View>

                    <View style={styles.bottomTab}>
                        <TouchableOpacity style={styles.tabButton}>
                            <Ionicons
                                name="home-outline"
                                size={28}
                                color="#fff"
                            />
                            <Text style={styles.tabText}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tabButton}>
                            <Ionicons
                                name="document-text-outline"
                                size={28}
                                color="#fff"
                            />
                            <Text style={styles.tabText}>Relatório</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tabButton}>
                            <Ionicons
                                name="person-outline"
                                size={28}
                                color="#fff"
                            />
                            <Text style={styles.tabText}>Perfil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff"
    },
    logoContainer: {
        position: "absolute"
    },

    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        backgroundColor: "#003DA5"
    },
    iconButton: {
        marginLeft: 15,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#C0C0C0"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        color: "#333"
    },
    bottomTab: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        backgroundColor: "#003DA5",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 5,
        elevation: 5
    },
    tabButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    tabText: {
        fontSize: 12,
        color: "#fff",
        marginTop: 4
    }
});

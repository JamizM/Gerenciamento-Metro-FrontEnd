import { router } from "expo-router";
import * as React from "react";
import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import {
    Modal,
    Portal,
    Text,
    Button,
    PaperProvider,
    Checkbox,
    IconButton
} from "react-native-paper";

import FindExtinguisherByStatus from "@/api/FindExtinguisherByStatus";

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
    localization: string;
}

export default function FindExtinguisherByFilter() {
    const [visible, setVisible] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    async function handleCheckboxClick(status: string) {
        const response = (await FindExtinguisherByStatus(
            status
        )) as Extinguisher[];
        console.log(response);
        hideModal();
    }

    return (
        <>
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    onPress={() => console.log(router.navigate("/MainPage"))}
                />
                <Text style={styles.title}>Extintor</Text>
            </View>
            <View style={styles.line} />
            <PaperProvider>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <View style={styles.buttonContainer}>
                        <Pressable>
                            <Button style={styles.link} onPress={showModal}>
                                Buscar extintor
                            </Button>
                        </Pressable>
                    </View>
                    <Portal>
                        <Modal
                            visible={visible}
                            onDismiss={hideModal}
                            contentContainerStyle={{
                                backgroundColor: "white",
                                padding: 20
                            }}
                        >
                            <Text style={{ color: "Black" }}>
                                Selecione o tipo do status do extintor
                            </Text>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                onPress={() => {
                                    const newChecked1 = !checked1;
                                    setChecked1(newChecked1);
                                    if (newChecked1) handleCheckboxClick("OK");
                                }}
                            >
                                <Checkbox
                                    status={checked1 ? "checked" : "unchecked"}
                                />
                                <Text style={{ color: "Black" }}>
                                    Extintores Regularizados
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                onPress={() => {
                                    const newChecked2 = !checked2;
                                    setChecked2(newChecked2);
                                    if (newChecked2)
                                        handleCheckboxClick("EXPIRED");
                                }}
                            >
                                <Checkbox
                                    status={checked2 ? "checked" : "unchecked"}
                                />
                                <Text style={{ color: "Black" }}>
                                    Extintores Expirados
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                onPress={() => {
                                    const newChecked3 = !checked3;
                                    setChecked3(newChecked3);
                                    if (newChecked3)
                                        handleCheckboxClick("MISPLACED");
                                }}
                            >
                                <Checkbox
                                    status={checked3 ? "checked" : "unchecked"}
                                />
                                <Text style={{ color: "Black" }}>
                                    Extintores Perdidos
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                onPress={() => {
                                    const newChecked4 = !checked4;
                                    setChecked4(newChecked4);
                                    if (newChecked4)
                                        handleCheckboxClick("MAINTENANCE");
                                }}
                            >
                                <Checkbox
                                    status={checked4 ? "checked" : "unchecked"}
                                />
                                <Text style={{ color: "Black" }}>
                                    Extintores em Manutenção
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.buttonContainer}>
                                <Pressable>
                                    <Button
                                        style={styles.link}
                                        onPress={hideModal}
                                    >
                                        Fechar
                                    </Button>
                                </Pressable>
                            </View>
                        </Modal>
                    </Portal>
                </View>
            </PaperProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        position: "relative"
    },
    title: {
        color: "black",
        fontSize: 30,
        position: "absolute",
        left: "50%",
        transform: [{ translateX: -45 }]
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginTop: 10,
        width: "80%",
        alignSelf: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        width: 180,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#1E90FF",
        marginVertical: 10
    },
    link: {
        fontSize: 50,
        color: "#ffffff",
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        width: "100%"
    }
});

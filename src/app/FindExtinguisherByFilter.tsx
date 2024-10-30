import { router } from "expo-router";
import * as React from "react";
import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import {
    Modal,
    Portal,
    Text,
    Button,
    TextInput,
    PaperProvider,
    Checkbox,
    IconButton
} from "react-native-paper";

import findExtinguisherByLocalization from "@/api/FindExtinguisherByLocalization";
import findExtinguisherByStatus from "@/api/FindExtinguisherByStatus";
import findExtinguisherBySublocalization from "@/api/FindExtinguisherBySubLocalization";

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
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);

    const [text, setText] = useState("");

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    async function handleCheckboxStatus(status: string) {
        const response = (await findExtinguisherByStatus(
            status
        )) as Extinguisher[];
        console.log(response);
        hideModal();
    }
    async function handleCheckboxLocalization(localization: Number) {
        const response = (await findExtinguisherByLocalization(
            localization
        )) as Extinguisher[];
        console.log(response);
    }
    async function handleTextInputSublocation(localization: String) {
        const response = (await findExtinguisherBySublocalization(
            localization
        )) as Extinguisher[];
        console.log(response);
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
            <View>
                <TextInput
                    mode="outlined"
                    label="Sublocalização"
                    style={styles.textInput}
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
                <IconButton
                    icon="filter-variant"
                    size={50}
                    onPress={() => handleTextInputSublocation(text)}
                    style={{ position: "absolute", right: 0, marginTop: 10 }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    style={{ width: 300, marginLeft: 15, borderRadius: 12 }}
                    onPress={showModal}
                >
                    <Text style={{ color: "white" }}> Buscar Extintores </Text>
                </Button>
            </View>

            <PaperProvider>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
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
                                Status do extintor
                            </Text>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                onPress={() => {
                                    const newChecked1 = !checked1;
                                    setChecked1(newChecked1);
                                    setChecked2(false);
                                    setChecked3(false);
                                    setChecked4(false);
                                    setChecked5(false);
                                    setChecked6(false);
                                    if (newChecked1) handleCheckboxStatus("OK");
                                }}
                            >
                                <Checkbox
                                    status={checked1 ? "checked" : "unchecked"}
                                    color="#1E90FF"
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
                                    setChecked1(false);
                                    setChecked3(false);
                                    setChecked4(false);
                                    setChecked5(false);
                                    setChecked6(false);
                                    if (newChecked2)
                                        handleCheckboxStatus("EXPIRED");
                                }}
                            >
                                <Checkbox
                                    status={checked2 ? "checked" : "unchecked"}
                                    color="#1E90FF"
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
                                    setChecked2(false);
                                    setChecked1(false);
                                    setChecked4(false);
                                    setChecked5(false);
                                    setChecked6(false);
                                    if (newChecked3)
                                        handleCheckboxStatus("MISPLACED");
                                }}
                            >
                                <Checkbox
                                    status={checked3 ? "checked" : "unchecked"}
                                    color="#1E90FF"
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
                                    setChecked2(false);
                                    setChecked3(false);
                                    setChecked1(false);
                                    setChecked5(false);
                                    setChecked6(false);
                                    if (newChecked4)
                                        handleCheckboxStatus("MAINTENANCE");
                                }}
                            >
                                <Checkbox
                                    status={checked4 ? "checked" : "unchecked"}
                                    color="#1E90FF"
                                />
                                <Text style={{ color: "Black" }}>
                                    Extintores em Manutenção
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.line} />
                            <Text style={{ color: "Black" }}>
                                Localização do extintor
                            </Text>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 10
                                }}
                                onPress={() => {
                                    const newChecked5 = !checked5;
                                    setChecked5(newChecked5);
                                    setChecked2(false);
                                    setChecked3(false);
                                    setChecked4(false);
                                    setChecked1(false);
                                    setChecked6(false);
                                    if (newChecked5)
                                        handleCheckboxLocalization(1);
                                }}
                            >
                                <Checkbox
                                    status={checked5 ? "checked" : "unchecked"}
                                    color="#1E90FF"
                                />
                                <Text style={{ color: "Black" }}>
                                    Extintores no Jabaquara
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                onPress={() => {
                                    const newChecked6 = !checked6;
                                    setChecked6(newChecked6);
                                    setChecked2(false);
                                    setChecked3(false);
                                    setChecked4(false);
                                    setChecked5(false);
                                    setChecked1(false);
                                    if (newChecked6)
                                        handleCheckboxLocalization(2);
                                }}
                            >
                                <Checkbox
                                    status={checked6 ? "checked" : "unchecked"}
                                    color="#1E90FF"
                                />
                                <Text style={{ color: "Black" }}>
                                    Extintores no Tucuruvi
                                </Text>
                            </TouchableOpacity>

                            <View style={styles.buttonContainer}>
                                <Pressable>
                                    <Button
                                        onPress={hideModal}
                                        style={{
                                            width: 300,
                                            marginLeft: 15,
                                            borderRadius: 12
                                        }}
                                    >
                                        <Text style={{ color: "white" }}>
                                            Fechar{" "}
                                        </Text>
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
    textInput: {
        height: 40,
        width: 300,
        margin: 15
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
        marginBottom: 10,
        width: "80%",
        alignSelf: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        width: 300,
        borderRadius: 12,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#1E90FF",
        marginVertical: 10
    }
});

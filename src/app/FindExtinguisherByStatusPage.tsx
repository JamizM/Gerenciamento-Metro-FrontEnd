import * as React from "react";
import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import {
    Modal,
    Portal,
    Text,
    Button,
    PaperProvider,
    Checkbox
} from "react-native-paper";

import FindExtinguisherByStatus from "@/api/FindExtinguisherByStatus";

const MyComponent = async () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: "white", padding: 20 };
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const setWhatToQuery = new Set<String>();
    async function queryingEachCheckbox() {
        const allQuerys = [];
        for (const querys in setWhatToQuery) {
            const response = await FindExtinguisherByStatus(querys);
            allQuerys.push(response);
        }
        return allQuerys;
    }
    return (
        <PaperProvider>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={containerStyle}
                >
                    <View>
                        <Text>Selecione o tipo do status do extintor</Text>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                            onPress={() => {
                                setChecked1(!checked1);
                                setWhatToQuery.add("OK");
                            }}
                        >
                            <Checkbox
                                status={checked1 ? "checked" : "unchecked"}
                            />
                            <Text>Extintores Regularizados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                            onPress={() => {
                                setChecked2(!checked2);
                                setWhatToQuery.add("EXPIRED");
                            }}
                        >
                            <Checkbox
                                status={checked2 ? "checked" : "unchecked"}
                            />
                            <Text>Extintores Expirados</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                            onPress={() => {
                                setChecked3(!checked3);
                                setWhatToQuery.add("MISPLACED");
                            }}
                        >
                            <Checkbox
                                status={checked3 ? "checked" : "unchecked"}
                            />
                            <Text>Extintores Perdidos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                            onPress={() => {
                                setChecked4(!checked4);
                                setWhatToQuery.add("MAINTENANCE");
                            }}
                        >
                            <Checkbox
                                status={checked4 ? "checked" : "unchecked"}
                            />
                            <Text>Extintores em Manutenção</Text>
                        </TouchableOpacity>
                        <Button
                            style={{ marginTop: 30 }}
                            onPress={queryingEachCheckbox}
                        >
                            Buscar
                        </Button>
                    </View>
                </Modal>
            </Portal>
            <Button style={{ marginTop: 30 }} onPress={showModal}>
                Filtrar Busca
            </Button>
        </PaperProvider>
    );
};

export default async function FindExtinguisherByStatusPage() {
    return (
        <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log("Pressed")}
        >
            Press me
        </Button>
    );
}

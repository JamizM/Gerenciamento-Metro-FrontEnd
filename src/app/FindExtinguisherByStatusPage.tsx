import * as React from "react";
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

const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: "white", padding: 20 };
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

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
                                FindExtinguisherByStatus("OK");
                            }}
                        >
                            <Checkbox
                                status={checked1 ? "checked" : "unchecked"}
                            />
                            <Text>Extintores Regularizados</Text>
                        </TouchableOpacity>
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

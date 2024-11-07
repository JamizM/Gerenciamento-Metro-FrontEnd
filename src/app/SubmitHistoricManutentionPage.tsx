import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView
} from "react-native";
import { IconButton } from "react-native-paper";

import cadastrarHistoricoManutencao from "@/api/historico_manutencao/CadastrarHistoricoManutencao";

interface HistoricManutention {
    idManutention: number;
    maintenanceDate: string;
    extinguisher: { id: string };
    description: string;
    responsible: string;
}

const SubmitHistoricManutentionPage: React.FC = () => {
    const [maintenanceDate, setMaintenanceDate] = useState("");
    const [extinguisherId, setExtinguisherId] = useState("");
    const [description, setDescription] = useState("");
    const [responsible, setResponsible] = useState("");
    const navigation = useNavigation();

    const objeto = {
        maintenanceDate,
        extinguisher: { id: extinguisherId },
        description,
        responsible
    };

    const handlePress = async () => {
        try {
            const response = await cadastrarHistoricoManutencao(objeto); //retorna "undefined", porem funcionando
            console.log("Detalhes do extintor:", response);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("Erro: ", error.message);
            }
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <IconButton
                        icon="arrow-left"
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.tittle}>Cadastro</Text>
                </View>

                <View style={styles.line} />

                <Text style={styles.label}>Data de Manutenção</Text>
                <TextInput
                    style={styles.input}
                    value={maintenanceDate}
                    onChangeText={setMaintenanceDate}
                />
                <Text style={styles.label}>ID do Extintor</Text>
                <TextInput
                    style={styles.input}
                    value={extinguisherId}
                    onChangeText={setExtinguisherId}
                />
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={setDescription}
                />
                <Text style={styles.label}>Responsável</Text>
                <TextInput
                    style={styles.input}
                    value={responsible}
                    onChangeText={setResponsible}
                />
                <Button title="Cadastrar" onPress={handlePress} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff"
    },
    label: {
        fontSize: 16,
        marginBottom: 8
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        position: "relative"
    },
    tittle: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 1,
        right: 25,
        textAlign: "center",
        textDecorationLine: "underline"
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginTop: 10,
        width: "80%",
        alignSelf: "center"
    }
});

export default SubmitHistoricManutentionPage;

import * as React from "react";
import { Text, ScrollView, StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-paper";

import cadastrarExtintor from "@/api/CadastrarExtintor";

export default function ExtinguisherPage() {
    const [id, setId] = React.useState("");
    const [extinguisherType, setExtinguisherType] = React.useState("");
    const [capacity, setCapacity] = React.useState("");
    const [manufacturerCode, setManufacturerCode] = React.useState("");
    const [expirationDate, setExpirationDate] = React.useState("");
    const [lastRechargeDate, setLastRechargeDate] = React.useState("");
    const [teamCode, setTeamCode] = React.useState("");
    const [nextInspection, setNextInspection] = React.useState("");
    const [extinguisherStatus, setExtinguisherStatus] = React.useState("");

    const objeto = {
        id,
        extinguisherType,
        capacity,
        manufacturerCode,
        expirationDate,
        lastRechargeDate,
        teamCode,
        nextInspection,
        extinguisherStatus
    };
    const handlePress = async () => {
        try {
            await cadastrarExtintor(objeto); // Chama a função já existente cadastrarExtintor
        } catch (error) {
            console.log("Erro ao cadastrar o extintor:", error);
        }
    };

    return (
        <>
            <Text style={styles.tittle}>Extintor</Text>
            <View style={styles.line} />
            <ScrollView>
                <TextInput
                    mode="outlined"
                    label="Codigo de Patrimonio"
                    style={styles.localInput}
                    value={id}
                    onChangeText={(patrimonio) => setId(patrimonio)}
                />
                <TextInput
                    mode="outlined"
                    label="Tipo de extintor"
                    style={styles.localInput}
                    value={extinguisherType}
                    onChangeText={(equipe) => setExtinguisherType(equipe)}
                />
                <TextInput
                    mode="outlined"
                    label="Capacidade"
                    style={styles.localInput}
                    value={capacity}
                    onChangeText={(tipo) => setCapacity(tipo)}
                />
                <TextInput
                    mode="outlined"
                    label="Código de manufatura"
                    style={styles.localInput}
                    value={manufacturerCode}
                    onChangeText={(capacidade) =>
                        setManufacturerCode(capacidade)
                    }
                />
                <TextInput
                    mode="outlined"
                    label="Datade expiração"
                    style={styles.localInput}
                    value={expirationDate}
                    onChangeText={(nsei) => setExpirationDate(nsei)}
                />
                <TextInput
                    mode="outlined"
                    label="Data do último Carregamento"
                    style={styles.localInput}
                    value={lastRechargeDate}
                    onChangeText={(fabricante) =>
                        setLastRechargeDate(fabricante)
                    }
                />
                <TextInput
                    mode="outlined"
                    label="Código do time"
                    style={styles.localInput}
                    value={teamCode}
                    onChangeText={(area) => setTeamCode(area)}
                />
                <TextInput
                    mode="outlined"
                    label="Próxima inspeção"
                    style={styles.localInput}
                    value={nextInspection}
                    onChangeText={(gerencia) => setNextInspection(gerencia)}
                />
                <TextInput
                    mode="outlined"
                    label="Status do extintor"
                    style={styles.localInput}
                    value={extinguisherStatus}
                    onChangeText={(setor) => setExtinguisherStatus(setor)}
                />
            </ScrollView>
            <Button
                title="Cadastrar Extintor"
                onPress={handlePress} // Chama handlePress que por sua vez chama cadastrarExtintor
            />
        </>
    );
}

const styles = StyleSheet.create({
    tittle: {
        color: "black",
        fontSize: 30,
        alignSelf: "center"
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginTop: 10,
        width: "80%",
        alignSelf: "center"
    },
    localInput: {
        width: "80%",
        alignSelf: "center",
        marginTop: 20
    }
});

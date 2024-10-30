import { router } from "expo-router";
import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput, IconButton } from "react-native-paper";

import cadastrarExtintor from "@/api/CadastrarExtintor";

export default function ExtinguisherPage() {
    const [openTypeDropdown, setOpenTypeDropdown] = useState(false);
    const [openStatusDropdown, setOpenStatusDropdown] = useState(false);

    const [id, setId] = React.useState("");
    const [extinguisherType, setExtinguisherType] = React.useState("");
    const [capacity, setCapacity] = React.useState("");
    const [manufacturerCode, setManufacturerCode] = React.useState("");
    const [expirationDate, setExpirationDate] = React.useState("");
    const [lastRechargeDate, setLastRechargeDate] = React.useState("");
    const [teamCode, setTeamCode] = React.useState("");
    const [nextInspection, setNextInspection] = React.useState("");
    const [extinguisherStatus, setExtinguisherStatus] = React.useState("");
    const [typeOptions, setTypeOptions] = useState([
        { label: "FOAM", value: "FOAM" },
        { label: "Pó Químico", value: "QUIMIC_POWDER" },
        { label: "Aguá", value: "WATER" },
        { label: "CO2", value: "CO2" },
        { label: "N2", value: "N2" }
    ]);
    const [statusOptions, setStatusOptions] = useState([
        { label: "OK", value: "OK" },
        { label: "Expirado", value: "EXPIRED" },
        { label: "Deslocado", value: "MISPLACED" },
        { label: "Manutenção", value: "MAINTENANCE" }
    ]);

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
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    onPress={() => router.navigate("/MainPage")}
                />
                <Text style={styles.tittle}>Extintor</Text>
            </View>
            <View style={styles.line} />

            <TextInput
                mode="outlined"
                label="Codigo de Patrimonio"
                placeholder="EX: 0EX143-4442"
                style={styles.localInput}
                value={id}
                onChangeText={(patrimonio) => setId(patrimonio)}
            />
            <DropDownPicker
                open={openTypeDropdown}
                value={extinguisherType}
                items={typeOptions}
                setOpen={(value) => {
                    setOpenTypeDropdown(value);
                    setOpenStatusDropdown(false); // Fecha o outro dropdown
                }}
                setValue={setExtinguisherType}
                setItems={setTypeOptions}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                placeholder="Selecione o tipo"
            />
            <TextInput
                mode="outlined"
                label="Capacidade"
                placeholder="EX: 10"
                keyboardType="numeric"
                style={styles.localInput}
                value={capacity}
                onChangeText={(tipo) => setCapacity(tipo)}
            />
            <TextInput
                mode="outlined"
                label="Código de manufatura"
                placeholder="EX: GIEFL"
                style={styles.localInput}
                value={manufacturerCode}
                onChangeText={(capacidade) => setManufacturerCode(capacidade)}
            />
            <TextInput
                mode="outlined"
                label="Datade expiração"
                placeholder="EX: 2027-12-01"
                keyboardType="numeric"
                style={styles.localInput}
                value={expirationDate}
                onChangeText={(nsei) => setExpirationDate(nsei)}
            />
            <TextInput
                mode="outlined"
                label="Data do último Carregamento"
                placeholder="EX: 2023-01-01"
                keyboardType="numeric"
                style={styles.localInput}
                value={lastRechargeDate}
                onChangeText={(fabricante) => setLastRechargeDate(fabricante)}
            />
            <TextInput
                mode="outlined"
                label="Código do time"
                style={styles.localInput}
                value={teamCode}
                keyboardType="numeric"
                onChangeText={(area) => setTeamCode(area)}
            />
            <TextInput
                mode="outlined"
                label="Próxima inspeção"
                placeholder="EX: 2026-01-01"
                keyboardType="numeric"
                style={styles.localInput}
                value={nextInspection}
                onChangeText={(gerencia) => setNextInspection(gerencia)}
            />
            <DropDownPicker
                open={openStatusDropdown}
                value={extinguisherStatus}
                items={statusOptions}
                setOpen={(value) => {
                    setOpenStatusDropdown(value);
                    setOpenTypeDropdown(false); // Fecha o outro dropdown
                }}
                setValue={setExtinguisherStatus}
                setItems={setStatusOptions}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                placeholder="Selecione o status"
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Cadastrar Extintor"
                    onPress={handlePress} // Chama handlePress que por sua vez chama cadastrarExtintor
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        position: "relative"
    },
    tittle: {
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
    localInput: {
        width: "80%",
        alignSelf: "center",
        marginTop: 20
    },
    back: {},
    buttonContainer: {
        alignSelf: "center",
        width: "80%",
        marginTop: 20
    },
    dropdown: {
        width: "80%",
        alignSelf: "center",
        marginTop: 20,
        // borderColor: "#6200ee", // mesma cor do TextInput outlined
        borderWidth: 1,
        borderRadius: 4,
        height: 56 // altura similar ao TextInput
    },
    dropdownContainer: {
        width: "80%",
        alignSelf: "center"
        // borderColor: "#6200ee", // cor da borda do container dropdown
    }
});

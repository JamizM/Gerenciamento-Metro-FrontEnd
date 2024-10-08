import * as React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function ExtinguisherPage() {
    const [patrimonio, setPatrimonio] = React.useState("");
    const [equipe, setEquipe] = React.useState("");
    const [tipo, setTipo] = React.useState("");
    const [capacidade, setCapacidade] = React.useState("");
    const [recarga, setRecarga] = React.useState("");
    const [nsei, setNsei] = React.useState("");
    const [fabricante, setFabricante] = React.useState("");
    const [area, setArea] = React.useState("");
    const [gerencia, setGerencia] = React.useState("");
    const [setor, setSetor] = React.useState("");
    const [predio, setPredio] = React.useState("");
    const [local, setLocal] = React.useState("");
    const [inmetro, setInmetro] = React.useState("");

    return (
        <>
            <Text style={styles.tittle}>Extintor</Text>
            <View style={styles.line} />
            <ScrollView>
                <TextInput
                    mode="outlined"
                    label="Codigo de Patrimonio"
                    style={styles.localInput}
                    value={patrimonio}
                    onChangeText={(patrimonio) => setPatrimonio(patrimonio)}
                />
                <TextInput
                    mode="outlined"
                    label="Codigo de Equipe"
                    style={styles.localInput}
                    value={equipe}
                    onChangeText={(equipe) => setEquipe(equipe)}
                />
                <TextInput
                    mode="outlined"
                    label="Tipo de Extintor"
                    style={styles.localInput}
                    value={tipo}
                    onChangeText={(tipo) => setTipo(tipo)}
                />
                <TextInput
                    mode="outlined"
                    label="Capacidade do Extintor"
                    style={styles.localInput}
                    value={capacidade}
                    onChangeText={(capacidade) => setCapacidade(capacidade)}
                />
                <TextInput
                    mode="outlined"
                    label="Proxima Recarga / Manutenção"
                    style={styles.localInput}
                    value={recarga}
                    onChangeText={(recarga) => setRecarga(recarga)}
                />
                <TextInput
                    mode="outlined"
                    label="Não sei ainda"
                    style={styles.localInput}
                    value={nsei}
                    onChangeText={(nsei) => setNsei(nsei)}
                />
                <TextInput
                    mode="outlined"
                    label="Fabricante"
                    style={styles.localInput}
                    value={fabricante}
                    onChangeText={(fabricante) => setFabricante(fabricante)}
                />
                <TextInput
                    mode="outlined"
                    label="Area"
                    style={styles.localInput}
                    value={area}
                    onChangeText={(area) => setArea(area)}
                />
                <TextInput
                    mode="outlined"
                    label="Gerencia"
                    style={styles.localInput}
                    value={gerencia}
                    onChangeText={(gerencia) => setGerencia(gerencia)}
                />
                <TextInput
                    mode="outlined"
                    label="Setor"
                    style={styles.localInput}
                    value={setor}
                    onChangeText={(setor) => setSetor(setor)}
                />
                <TextInput
                    mode="outlined"
                    label="Predio"
                    style={styles.localInput}
                    value={predio}
                    onChangeText={(predio) => setPredio(predio)}
                />
                <TextInput
                    mode="outlined"
                    label="Local"
                    style={styles.localInput}
                    value={local}
                    onChangeText={(local) => setLocal(local)}
                />
                <TextInput
                    mode="outlined"
                    label="Selo Inmetro"
                    style={styles.localInput}
                    value={inmetro}
                    onChangeText={(inmetro) => setInmetro(inmetro)}
                />
            </ScrollView>
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

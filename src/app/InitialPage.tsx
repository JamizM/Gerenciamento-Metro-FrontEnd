import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import { TextInput } from "react-native-paper";

import MetroSP from "./images/metro-sp";

export default function InitialPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <MetroSP />
                <SafeAreaView>
                    <TextInput
                        mode="outlined"
                        label="Email"
                        style={styles.textInput}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        mode="outlined"
                        label="Senha"
                        style={styles.textInput}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: "#e2dad8",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        backgroundColor: "white",
        height: 370,
        width: 370,
        justifyContent: "center",
        borderRadius: 35
    },
    textInput: {
        height: 50,
        margin: 15
    }
});

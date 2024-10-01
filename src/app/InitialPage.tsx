import { Link } from "expo-router";
import * as React from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Alert,
    Pressable,
    Text
} from "react-native";
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
                <View style={styles.buttonContainer}>
                    <Link href="/MainPage" asChild>
                        <Pressable>
                            <Text style={styles.link}>Logar</Text>
                        </Pressable>
                    </Link>
                </View>
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
        height: 380,
        width: 370,
        justifyContent: "center",
        borderRadius: 35
    },
    textInput: {
        height: 50,
        margin: 15
    },
    buttonContainer: {
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#1E90FF",
        borderRadius: 20
    },
    link: {
        fontSize: 20,
        color: "#fff"
    }
});

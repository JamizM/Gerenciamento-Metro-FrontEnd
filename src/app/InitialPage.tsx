import { useRouter } from "expo-router";
import React, { useState } from "react";
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

import listarUsuario from "@/api/AuthenticateUser";

export default function InitialPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const userData = await listarUsuario(email);

            if (
                userData.firstName === "Pedro" &&
                userData.password === "12345" &&
                userData.email === "Pedro@gmail.com"
            ) {
                Alert.alert("Success", "Login successful");
                router.push("/MainPage");
            } else {
                setIsButtonDisabled(true);
                Alert.alert(
                    "Access Denied",
                    "You are not authorized to access this page."
                );
            }
        } catch (error) {
            Alert.alert("Error", "An error occurred. Please try again.");
        }
    };

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
                        secureTextEntry
                    />
                </SafeAreaView>
                <View style={styles.buttonContainer}>
                    <Pressable
                        onPress={handleLogin}
                        disabled={isButtonDisabled}
                    >
                        <Text
                            style={[
                                styles.link,
                                isButtonDisabled && { color: "#b0b0b0" }
                            ]}
                        >
                            Logar
                        </Text>
                    </Pressable>
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
        backgroundColor: "#001489",
        borderRadius: 20
    },
    link: {
        fontSize: 20,
        color: "#fff"
    }
});

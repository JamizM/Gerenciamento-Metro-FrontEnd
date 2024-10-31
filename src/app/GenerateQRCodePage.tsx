import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    StyleSheet,
    Linking
} from "react-native";
import { IconButton } from "react-native-paper";

import GerarQrCodePorExtintor from "@/api/extintores/GerarQRCode";

const QRCodeGenerator = () => {
    const [extinguisherId, setExtinguisherId] = useState("");
    const [qrcode, setQrCode] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigation = useNavigation();

    const handleGenerateQRCode = async () => {
        if (extinguisherId) {
            try {
                const generatedQrCode =
                    await GerarQrCodePorExtintor(extinguisherId);
                console.log("QR Code gerado:", generatedQrCode);

                if (generatedQrCode) {
                    setQrCode(generatedQrCode);
                    setError(null);
                } else {
                    setQrCode(null);
                    setError(
                        "Erro ao gerar o QR Code, verifique o patrimônio do extintor."
                    );
                }
            } catch (err) {
                console.error("Erro ao gerar QR Code:", err);
                setError("Erro ao gerar o QR Code");
            }
        } else {
            Alert.alert(
                "Atenção",
                "Por favor, insira o patrimônio do extintor."
            );
        }
    };

    const handleOpenURL = () => {
        const url = `http://10.2.128.58/api/Extinguishers/${extinguisherId}/qrcode`;
        Linking.openURL(url).catch((err) =>
            console.error("Erro ao abrir URL:", err)
        );
    };

    return (
        <>
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    size={20}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Gerar QR Code Extintor</Text>
            </View>

            <View style={styles.line} />

            <TextInput
                style={styles.input}
                placeholder="Digite o ID do Extintor"
                value={extinguisherId}
                onChangeText={setExtinguisherId}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleGenerateQRCode}
            >
                <Text style={styles.buttonText}>Gerar QR Code</Text>
            </TouchableOpacity>

            {error && <Text style={styles.errorText}>{error}</Text>}

            {qrcode && (
                <View>
                    <Image
                        source={{ uri: `data:image/png;base64,${qrcode}` }}
                        style={styles.qrCodeImage}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleOpenURL}
                    >
                        <Text style={styles.buttonText}>Baixar Arquivo</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center"
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: "80%",
        alignSelf: "center",
        marginTop: 20 // Cria espaço entre o título e o input
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignSelf: "center",
        marginVertical: 10
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    qrCodeContainer: {
        marginTop: 20,
        alignItems: "center"
    },
    qrCodeImage: {
        width: 350,
        height: 350
    },
    errorText: {
        color: "red",
        marginTop: 8
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        position: "relative"
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginTop: 10,
        width: "80%",
        alignSelf: "center"
    }
});

export default QRCodeGenerator;

import axios from "axios";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    Alert,
    StyleSheet,
    Linking
} from "react-native";

import GerarQrCodePorExtintor from "@/api/GerarQRCode";

const QRCodeGenerator = () => {
    const [extinguisherId, setExtinguisherId] = useState("");
    const [qrcode, setQrCode] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

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
                        "Erro ao gerar o QR Code, vefirique o patrimonio do extintor."
                    );
                }
            } catch (err) {
                console.error("Erro ao gerar QR Code:", err);
                setError("Erro ao gerar o QR Code");
            }
        } else {
            Alert.alert(
                "Atenção",
                "Por favor, insira o patrimonio do extintor."
            );
        }
    };

    const handleOpenURL = () => {
        const url = `http://192.168.0.41:8080/api/Extinguishers/${extinguisherId}/qrcode`;
        Linking.openURL(url).catch((err) =>
            console.error("Erro ao abrir URL:", err)
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerar QR Code Extintor</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite o ID do Extintor"
                value={extinguisherId}
                onChangeText={setExtinguisherId}
            />

            <Button title="Gerar QR Code" onPress={handleGenerateQRCode} />

            {error && <Text style={styles.errorText}>{error}</Text>}

            {qrcode && (
                <View>
                    <Image
                        source={{ uri: `data:image/png;base64,${qrcode}` }}
                        style={styles.qrCodeImage}
                    />
                    <Button title="Baixar Arquivo" onPress={handleOpenURL} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: "100%"
    },
    qrCodeContainer: {
        marginTop: 20,
        alignItems: "center"
    },
    qrCodeText: {
        fontSize: 18,
        marginBottom: 10
    },
    qrCodeImage: {
        width: 350,
        height: 350
    },
    errorText: {
        color: "red",
        marginTop: 8
    }
});

export default QRCodeGenerator;

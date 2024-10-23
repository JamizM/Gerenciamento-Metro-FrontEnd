import { CameraView, Camera } from "expo-camera";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { IconButton } from "react-native-paper";

export default function App() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarcodeScanned = ({ data }: { data: string }) => {
        setScanned(true);
        alert(` ${data}`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    iconColor="white"
                    onPress={() => console.log(router.back())}
                />
                <Text style={styles.text}>QR Code Scanner</Text>
            </View>
            <View style={styles.container}>
                <CameraView
                    onBarcodeScanned={
                        scanned ? undefined : handleBarcodeScanned
                    }
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "pdf417"]
                    }}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && (
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Tap to Scan Again"
                            onPress={() => setScanned(false)}
                        />
                    </View>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    buttonContainer: {
        alignSelf: "center",
        borderRadius: 25,
        position: "absolute",
        bottom: 0,
        height: 100,
        width: 350,
        padding: 30
    },
    header: {
        height: 50,
        backgroundColor: "#003DA5",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        position: "relative"
    },
    text: {
        color: "white",
        fontSize: 20,
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center"
    }
});

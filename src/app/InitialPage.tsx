import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function InitialPage() {
    return (
        <View style={{ backgroundColor: "#2c53a1", flex: 1 }}>
            <View style={styles.container} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 350,
        width: 350,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 35
    }
});

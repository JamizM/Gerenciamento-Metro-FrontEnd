import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";

export default function SecondPage() {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Histórico de Manutenção</Text>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonContainer}>
                            <Link href="/SubmitHistoricManutentionPage" asChild>
                                <Pressable>
                                    <Text style={styles.link}>Cadastrar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link href="/UpdateHistoricManutentionPage" asChild>
                                <Pressable>
                                    <Text style={styles.link}>Alterar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link href="/DeleteHistoricManutentionPage" asChild>
                                <Pressable>
                                    <Text style={styles.link}>Deletar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link href="/ListHistoricManutentionsPage" asChild>
                                <Pressable>
                                    <Text style={styles.link}>Listar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link
                                href="/ListHistoricManutentionByIdPage"
                                asChild
                            >
                                <Pressable>
                                    <Text style={styles.link}>
                                        Localizar Histórico
                                    </Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Link
                                href="/FindExtinguisherByHistoricManutentionPage"
                                asChild
                            >
                                <Pressable>
                                    <Text style={styles.link}>
                                        Localizar Extintor
                                    </Text>
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        backgroundColor: "#fff"
    },
    buttonGroup: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingVertical: 6
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        width: 250,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#001489",
        borderRadius: 20,
        marginVertical: 10
    },
    link: {
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        width: "100%"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        position: "relative"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
        right: 25
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginTop: 10,
        width: "80%",
        alignSelf: "center"
    }
});

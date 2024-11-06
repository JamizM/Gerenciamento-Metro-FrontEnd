import { useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
    Pressable
} from "react-native";
import { IconButton } from "react-native-paper";

import registerLocation from "@/api/localizacao/CadastrarLocalizacao";

type Extintor = {
    estacao: string;
    plataforma: string;
    descricao: string;
};

type Extintores = {
    [linha: string]: Extintor[];
};

const initialExtintores: Extintores = {
    "Linha 1-Azul": [{ estacao: "", plataforma: "", descricao: "" }],
    "Linha 1-Verde": [{ estacao: "", plataforma: "", descricao: "" }],
    "Linha 3-Vermelha": [{ estacao: "", plataforma: "", descricao: "" }],
    "Linha 4-Amarela": [{ estacao: "", plataforma: "", descricao: "" }],
    "Linha 5-Lilás": [{ estacao: "", plataforma: "", descricao: "" }],
    "Linha 15-Prata": [{ estacao: "", plataforma: "", descricao: "" }]
};

export default function LocalizacaoExtintores() {
    const [expandedLines, setExpandedLines] = useState<{
        [linha: string]: boolean;
    }>({});
    const [extintores, setExtintores] = useState<Extintores>(initialExtintores);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigation = useNavigation();

    const toggleExpand = (linha: string) => {
        setExpandedLines((prev) => ({
            ...prev,
            [linha]: !prev[linha]
        }));
    };

    const handleChange = (
        linha: string,
        idx: number,
        field: keyof Extintor,
        value: string
    ) => {
        const updatedExtintores = { ...extintores };
        updatedExtintores[linha][idx][field] = value;
        setExtintores(updatedExtintores);
    };

    const handleSendInfo = async () => {
        const newErrors: { [key: string]: string } = {};
        let isAtLeastOneLineFilled = false;
        // Variável para checar se ao menos uma linha foi preenchida

        Object.entries(extintores).forEach(([linha, plataformas]) => {
            plataformas.forEach((extintor, idx) => {
                if (
                    !extintor.estacao ||
                    !extintor.plataforma ||
                    !extintor.descricao
                ) {
                    newErrors[`${linha}-${idx}`] = "Preencha todos os campos.";
                    // Armazena erros para campos vazios
                } else {
                    isAtLeastOneLineFilled = true;
                    // Seta true se uma linha estiver preenchida
                }
            });
        });

        if (!isAtLeastOneLineFilled) {
            setErrors(newErrors);
            Alert.alert("Erro", "Por favor, preencha os campos obrigatórios.");
        } else {
            setErrors({});
            await registerLocation(extintores)
                .then((response) => alert("Enviado com sucesso!"))
                .catch((error) => alert("Erro"));
            Alert.alert(
                "Informações Enviadas",
                "As informações foram salvas com sucesso."
            );
            console.log("Informações enviadas:", extintores);
            router.navigate("/ExtinguisherPage"); // Navega para a página
        }
    };

    const getLinhaColor = (linha: string): string => {
        switch (linha) {
            case "Linha 1-Azul":
                return "blue";
            case "Linha 1-Verde":
                return "green";
            case "Linha 3-Vermelha":
                return "red";
            case "Linha 4-Amarela":
                return "gold";
            case "Linha 5-Lilás":
                return "purple";
            case "Linha 15-Prata":
                return "gray";
            default:
                return "gray";
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <IconButton
                    icon="arrow-left"
                    size={24}
                    // style={{ marginRight: 15 }}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.title}>Localização dos Extintores</Text>
            </View>
            <View style={styles.line} />

            <ScrollView>
                {Object.entries(extintores).map(
                    ([linha, plataformas], index) => (
                        <View key={index} style={styles.linhaBox}>
                            <TouchableOpacity
                                onPress={() => toggleExpand(linha)}
                            >
                                <View
                                    style={[
                                        styles.linhaHeader,
                                        {
                                            backgroundColor:
                                                getLinhaColor(linha)
                                        }
                                    ]}
                                >
                                    <Text style={styles.linhaTitulo}>
                                        {linha}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {expandedLines[linha] && (
                                <View style={styles.plataformaContainer}>
                                    {plataformas.map((extintor, idx) => (
                                        <View
                                            key={idx}
                                            style={styles.plataformaCard}
                                        >
                                            <Text style={styles.label}>
                                                Estação:
                                            </Text>
                                            <TextInput
                                                style={styles.input}
                                                value={extintor.estacao}
                                                onChangeText={(value) =>
                                                    handleChange(
                                                        linha,
                                                        idx,
                                                        "estacao",
                                                        value
                                                    )
                                                }
                                            />
                                            {errors[`${linha}-${idx}`] && (
                                                <Text style={styles.error}>
                                                    {errors[`${linha}-${idx}`]}
                                                </Text>
                                            )}

                                            <Text style={styles.label}>
                                                Plataforma:
                                            </Text>
                                            <TextInput
                                                style={styles.input}
                                                value={extintor.plataforma}
                                                onChangeText={(value) =>
                                                    handleChange(
                                                        linha,
                                                        idx,
                                                        "plataforma",
                                                        value
                                                    )
                                                }
                                            />

                                            <Text style={styles.label}>
                                                Localização Detalhada:
                                            </Text>
                                            <TextInput
                                                style={styles.input}
                                                value={extintor.descricao}
                                                onChangeText={(value) =>
                                                    handleChange(
                                                        linha,
                                                        idx,
                                                        "descricao",
                                                        value
                                                    )
                                                }
                                            />
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    )
                )}
                {/* <View style={styles.buttonContainer}>
                    <Link href="/ExtinguisherPage" asChild>
                        <Pressable onPress={handleSendInfo}>
                            <Text style={styles.link}>Enviar</Text>
                        </Pressable>
                    </Link>
                </View> */}

                <View style={styles.buttonContainer}>
                    <Pressable onPress={handleSendInfo}>
                        <Text style={styles.link}>Enviar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "transparent",
        justifyContent: "space-between"
    },
    title: {
        color: "black",
        fontSize: 20,
        position: "relative",
        left: "50%",
        flex: 1
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginBottom: 10,
        width: "90%",
        alignSelf: "center"
    },
    linhaBox: {
        marginBottom: 24,
        borderRadius: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        overflow: "hidden",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2
    },
    linhaHeader: {
        padding: 10
    },
    linhaTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },
    plataformaContainer: {
        backgroundColor: "#f0f0f0"
    },
    plataformaCard: {
        backgroundColor: "#fff",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 8,
        marginBottom: 5,
        borderRadius: 5,
        fontSize: 16
    },
    error: {
        color: "red",
        fontSize: 14
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#1E90FF",
        borderRadius: 20,
        marginVertical: 10
    },
    link: {
        fontSize: 15,
        color: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        width: "100%"
    }
});

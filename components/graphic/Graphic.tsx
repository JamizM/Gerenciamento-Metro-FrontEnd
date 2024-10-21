import React, { View } from "react-native";
import { VictoryChart, VictoryLine } from "victory-native";

import PuxarExtintoresPorEstacao from "@/api/PuxarExtintoresPorEstacao";

const sampleData = [
    { x: "Jabaquara", y: PuxarExtintoresPorEstacao(1) },
    { x: "Tucuruvi", y: PuxarExtintoresPorEstacao(2) }
];

export default function MyChart() {
    return (
        <View style={{ height: 300 }}>
            <VictoryChart>
                <VictoryLine
                    data={sampleData}
                    x="Estações"
                    y="Número de Extintores"
                />
            </VictoryChart>
        </View>
    );
}

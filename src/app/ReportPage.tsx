import React, { useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

export default function Report() {
  
  const [selectedReport, setSelectedReport] = useState(null);

  
  const dataTrocas = [
    { month: 'Jan', value: 120 },
    { month: 'Fev', value: 340 },
    { month: 'Mar', value: 560 },
    { month: 'Abr', value: 290 },
    { month: 'Mai', value: 870 },
    { month: 'Jun', value: 430 },
    { month: 'Jul', value: 610 },
    { month: 'Ago', value: 540 },
    { month: 'Set', value: 720 },
    { month: 'Out', value: 900 },
    { month: 'Nov', value: 630 },
    { month: 'Dez', value: 760 },
  ];

  const dataVencimentos = [
    { month: 'Jan', value: 300 },
    { month: 'Fev', value: 200 },
    { month: 'Mar', value: 400 },
    { month: 'Abr', value: 500 },
    { month: 'Mai', value: 350 },
    { month: 'Jun', value: 450 },
    { month: 'Jul', value: 380 },
    { month: 'Ago', value: 640 },
    { month: 'Set', value: 710 },
    { month: 'Out', value: 520 },
    { month: 'Nov', value: 490 },
    { month: 'Dez', value: 600 },
  ];

  const dataExtintores = [
    { month: 'Jan', value: 230 },
    { month: 'Fev', value: 450 },
    { month: 'Mar', value: 680 },
    { month: 'Abr', value: 390 },
    { month: 'Mai', value: 780 },
    { month: 'Jun', value: 320 },
    { month: 'Jul', value: 520 },
    { month: 'Ago', value: 610 },
    { month: 'Set', value: 830 },
    { month: 'Out', value: 740 },
    { month: 'Nov', value: 560 },
    { month: 'Dez', value: 670 },
  ];

  const renderChart = (data) => (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryBar
        data={data}
        x="month"
        y="value"
        style={{ data: { fill: "#c43a31" } }}
      />
    </VictoryChart>
  );

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
       
        <View style={{
          borderWidth: 2,
          borderColor: '#0072bc',
          borderRadius: 10,
          padding: 15,
          width: '90%',
        }}>
          <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>
            Relatório 
          </Text>

          
          <View style={{
            borderWidth: 1,
            borderColor: '#005f99', 
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#e6f7ff' 
          }}>
            
            <Button
              title=" Relatório de Trocas"
              onPress={() => setSelectedReport('trocas')}
            />
            <View style={{ marginVertical: 10 }} />

            <Button
              title=" Relatório de Vencimentos"
              onPress={() => setSelectedReport('vencimentos')}
            />
            <View style={{ marginVertical: 10 }} />

            
            <Button
              title=" Relatório de Extintores"
              onPress={() => setSelectedReport('extintores')}
            />
          </View>
        </View>

        <View style={{ marginTop: 30, width: '90%' }}>
          
          {selectedReport === 'trocas' && renderChart(dataTrocas)}
          {selectedReport === 'vencimentos' && renderChart(dataVencimentos)}
          {selectedReport === 'extintores' && renderChart(dataExtintores)}
        </View>
      </View>
    </ScrollView>
  );
}

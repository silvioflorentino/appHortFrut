import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function Frutas() {
  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>Lista de Frutas</Text>

      <FlatList
        data={frutas}
        renderItem={({ item }) =>
          <TouchableOpacity>
            <View style={estilo.grupoFrutas}>

              <Text style={estilo.textoBotaoFruta}>{item.fruta}</Text>
              <Text style={estilo.textoBotaoValor}>{item.valor}</Text>

            </View>
          </TouchableOpacity>

        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const frutas = [
  {
    id: 1,
    fruta: 'Banana',
    valor: 'R$ 2,56'
  },
  {
    id: 2,
    fruta: 'Abacaxi',
    valor: 'R$ 5,56'
  }
]

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9c46a',

  },
  titulo: {
    fontSize: 30,
    color: "#2a9d8f",
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  grupoFrutas: {
    backgroundColor: '#2a9d8f',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoFruta: {
    fontSize: 20
  },
  textoBotaoValor: {
    fontSize: 20
  }


});







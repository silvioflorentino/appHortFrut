import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native';
import { salvarNovaFruta } from './ModelFrutas';

export default function CadastrarFruta() {
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

   async function cadastro() {
        const resultado = await salvarNovaFruta(idp, frutap, valorp, fotop);
        if (resultado == 'Sucesso') {
            Alert.alert('Fruta cadastrada com Sucesso!!');
        } else {
            Alert.alert('Erro ao cadastrar a fruta');
        }
    }

    return (
        <View style={estilo.container}>
            <TextInput
                value={idp}
                placeholder="Digite o código da Fruta"
                style={estilo.textInputTodos}
                onChangeText={setIdp}
            />
            <TextInput
                value={frutap}
                placeholder="Digite o nome da Fruta"
                style={estilo.textInputTodos}
                onChangeText={setFrutap}
            />
            <TextInput
                value={valorp}
                placeholder="Digite o valor da Fruta"
                style={estilo.textInputTodos}
                onChangeText={setValorp}
            />
            <TextInput
                value={fotop}
                placeholder="Digite o link da Fruta"
                style={estilo.textInputTodos}
                onChangeText={setFotop}
            />

            <TouchableOpacity style={estilo.botaoCadastrar} onPress={cadastro}>
                <Text style={estilo.textoBotaoCadastrar}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9c46a',
    },
    botaoCadastrar: {
        backgroundColor: '#2a9d8f',
        margin: 15,
        padding: 5,
        borderRadius: 10,
    },
    textInputTodos: {
        fontSize: 18

    },
})
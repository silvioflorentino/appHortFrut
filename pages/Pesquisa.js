import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';

export default function Pesquisa(){
function pesquisarFruta(){
  Alert.alert('Atenção','Estamos fora do ar.')
}
//--comentario --//

 return(
    <View style={estilo.container}>
     <Text style={estilo.titulo}>Qual Fruta vc quer?</Text>
      <TextInput 
      placeholder='Digite uma fruta.'
      style={estilo.textInput}
      />
      
      <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarFruta()}>
          <Text style={estilo.textoBotao} >Pesquisar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
 );   
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9c46a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput:{
      borderColor:'#e76f51',
      fontSize:20,
      width:'80%',
      height:30,
      borderWidth:2,
      borderRadius:8,
      marginTop:30,
      paddingHorizontal:10
    },
    botao:{
      backgroundColor:"#f4a261",
      marginTop:15,
      padding:10,
      borderRadius:15,
      width:'80%',
      justifyContent:'center',
      alignItems:'center'
    },
    textoBotao:{
      fontSize: 18,
      fontWeight: '700',
      color:'#2a9d8f'
    },
    titulo:{
      fontSize:30,
      color:"#2a9d8f"
    }
  });
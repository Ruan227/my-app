import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Nome() {
  return (
    <View>
      <Text style={styles.texto}>Digite seu Nome</Text>
      <Text style={styles.texto}>Nome</Text>
      <TextInput 
      style={styles.input}/>
      <Button 
      title='Enviar'
      onPress={()=>alert('Enviar')}/>
    </View>
  )
}

const styles = StyleSheet.create({

    texto:{
        fontSize: 30,
        fontWeight: 'blod',
    },
    input:{
        fontSize: 30,
        color: 'red',
        borderWidth: 2,
        margin: 10,
        borderColor: '#fff'
    },

})
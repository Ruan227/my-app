import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {

    const [valor, setValor] = useState(0)

    function incrementar (){
        setValor(valor + 1)
        console.log(valor)
    }
        function decrementar (){
            setValor(valor - 1)
        console.log(valor)
    }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>VOLUME</Text>
        <Text style={styles.text}>{valor}</Text>
        <View styles={styles.botao}>
            <Button title='IMCREMENTAR' 
            onPress={incrementar}/>
            <Button title='DECREMENTAR'
            onPress={decrementar} />
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({})
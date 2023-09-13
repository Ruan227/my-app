import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ParOuImpar(props) {
    const numero = props.numero
  return (
    <View>
      <Text style={{fontSize: 30}}>o numero {numero} é</Text>
      <Text style={{color: numero % 2 === 0? 'blue' : 'red', fontSize: 30 }}>{numero % 2 === 0 ?'par' : 'Impar'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
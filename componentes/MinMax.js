import React from 'react'
import { Text } from 'react-native';


export default function MinMax({min, max}) {
const retorno = max>min?max:min
return (

   <Text>
     Maior {retorno}
   </Text>
)
}
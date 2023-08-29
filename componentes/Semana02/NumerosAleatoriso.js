import React from "react";
import { Text } from "react-native";

export default function NumeroAleatorio({min, max}){

    const NumeroAleatorio = parseInt(Math.random() * (max - min +1) + min)
        return(
            <Text>
                Numero Aleatorio é: {NumeroAleatorio}
            </Text>
        )

}
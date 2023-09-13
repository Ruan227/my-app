import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;
export default function Cronometro() {
    const [display, setDisplay] = useState('00:00:00')
    const [botaoTexto, setBotaoTexto] = useState('Iniciar')
    const [ultimoTempo, setUltimoTempo] = useState(null)

    function start() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
            setBotaoTexto('Iniciar')
        } else {
            timer = setInterval(() =>{
                ss++;

                if (ss == 60) {
                    ss = 0;
                    mm++;

                }
                if (mm == 60) {
                    mm = 0;
                    hh++;

                }

                let format = (hh < 10 ? '0' : '') + hh
                    + ':' + (mm < 10 ? '0' : '') + mm
                    + ':' + (ss < 10 ? '0' : '') + ss;

                    setDisplay(format)
            }, 100)
            setBotaoTexto('Parar')
        }
    }

    function clear() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }

        ss = 0;
        mm = 0;
        hh = 0;

        setUltimoTempo(display)
        setDisplay('00:00:00')
        setBotaoTexto('Iniciar')
    }

  return (
    <View>
        <Image
        source={require("../../assets/kisspng-egg-timer-digital-clock-clip-art-stopwatch-image-5a795178cbb672.3434008915179001528344.png")}
        style={styles.img}/>

      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao1}
        onPress={start}>
            <Text style={styles.botaoTexto}>{botaoTexto}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao2}
        onPress={clear}>
            <Text style={styles.botaoTexto}>Reiniciar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.ultimoTempoArea}>
        <Text style={styles.ultimoTempoArea}>{ultimoTempo ? `Último tempo: ${ultimoTempo}` : ''}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    // Defina seus estilos aqui
    img: {
        height: 225,
        width: 187,
        marginLeft: 67,
        alignItems:"center",
    },
    display: {
      
      marginTop:50,
      alignItems:"center"
    },
    displayText: {
      fontSize: 50,
    },
    botao1: {
        backgroundColor: "#53d54d",
        borderRadius: 10,
        marginTop: 30,
        marginRight:30,
        width: 150,
        borderColor: "black",
      borderWidth:1,
    },
    botao2: {
      backgroundColor: "red",
      borderRadius: 10,
      marginTop: 30,
      width: 150,
      borderColor: "black",
      borderWidth:1,
  },
    botaoTexto: {
        fontSize:35,
        textAlign: "center"
    },
    botoes: {
      flexDirection: "row",

    },
    ultimoTempoArea: {
      textAlign: "center",
      fontSize: 20
      }
})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MeuComponete from './componentes/Semana01/MeuComponete';
import MinMax from './componentes/Semana01/MinMax';
import NumeroAleatorio from './componentes/Semana02/NumerosAleatoriso';
import Contador from './componentes/Semana03/Contador';
import Nome from './componentes/Semana03/Nome';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>bola</Text>
      <MinMax min="30" max="20" />
      <NumeroAleatorio min={8} max={10} />
      <Contador/> */}
      <Nome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginTop: 40,
  },
});
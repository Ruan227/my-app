import { StyleSheet, Text, View, Image } from 'react-native';
import Nome from './componentes/Semana03/Nome';
import Cronometro from './componentes/Semana04/Cronometro';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Nome/> */}
      <Cronometro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MeuComponete from './componentes/MeuComponete';
import MinMax from './componentes/MinMax';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>bola</Text>
      <MinMax min="30" max="20" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6363',
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
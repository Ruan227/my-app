import { StyleSheet, Text, View, Image } from 'react-native';
import Nome from './componentes/Semana03/Nome';

export default function App() {
  return (
    <View style={styles.container}>
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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>bola</Text>
      
      <Image
        style={styles.stretch}
        source={require('./assets/icon.png')}
      />
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







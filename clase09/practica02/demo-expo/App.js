import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagee from './src/components/Imagee';
import ImageRemota from './src/components/ImageRemota';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo!</Text>
      <Imagee/>
      <ImageRemota/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});

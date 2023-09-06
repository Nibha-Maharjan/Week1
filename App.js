import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>About me</Text>
      <Text>Hello, My name is Nibha Maharjan</Text>
      <Text>I come from Kathmandu, Nepal</Text>
      <Text>Hello, My name is Nibha Maharjan</Text>
      <Text>I completed my Bsc(Hons)IT from London Metropolitan University</Text>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    flex: 1,
    backgroundColor: '#ffbc00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

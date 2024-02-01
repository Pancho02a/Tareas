
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const app = () => {
  return(
    <View style={styles.container}> 
      <Text style={styles.textHelloWorld} >Hola mundo</Text>
      <Text style={styles.textname}>Me llamo Pancho</Text>
      <Text style={styles.textbody}>Y estoy en la clase de dispositivos moviles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#a78b83',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHelloworld: {
    fontSize: 40,
    fornWeight: 'bold',
    color: "#FFFFFF",
    fontFamily: 'Helvetica',
  },  
  textname: {
    fontSize: 20,
    fontWeight: '300',
    color: "red",
  },
  textbody: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
    color: "green",
  },
});

export default app;


import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inicio}>

        <Text style={styles.inicioHeader}>FRANCISCO JAVIER ENRIQUEZ MOSQUEDA</Text>
        <Text style={styles.inicioSubHeader}>LIC. Ingenieria de Software</Text>
        <View style={styles.imagenContainer}>
          <Image
          source={require('./assets/foto-mia.jpeg')} 
          style={{ width: 150, height: 190, borderRadius: 30, borderWidth: 3, borderColor: '#46a492' }}
          />
      </View>

      </View>

      <View style={styles.sobreMi}>
        <Text style={styles.sobreMiSubHeader}>DETALLES PERSONALES</Text>
        <View style={styles.parrafoColorContainer}>
          <Text style={styles.parrafoColor}>Edad= 20 años </Text>
          <Text style={styles.parrafoColor}>Dirección= Calle Cedro #128 Col. Eucaliptos </Text>
          <Text style={styles.parrafoColor}>Número de teléfono= 4427187295</Text>
          <Text style={styles.parrafoColor}>Correo electrónico: fenriquez02@alumnos.uaq.mx</Text>
        </View>

        <View style={styles.parrafo1Container}>
          <Text style={styles.parrafo1titulo}>Mis Habilidades</Text>
          <Text style={styles.parrafo1}>Me especializo en programación con Python y cuento con conocimientos 
          previos en los lenguajes de programación JavaScript, C y C++. Además, poseo habilidades avanzadas 
          en la creación y administración de bases de datos. Soy competente en el desarrollo de páginas web, 
          utilizando HTML5, CSS y JavaScript. Mi enfoque autodidacta me permite adquirir rápidamente nuevas habilidades 
          y enfrentar desafíos con eficacia. Mi capacidad para aprender de manera independiente asegura que siempre 
          esté actualizado/a con las últimas tendencias y tecnologías en el campo de la programación. </Text>
        </View>

        <View style={styles.parrafo2Container}>
          <Text style={styles.parrafo2titulo}>Mi preparacion y experiencia</Text>
          <Text style={styles.parrafo2}>Mi camino tecnológico comenzó en el CECyTEQ, donde obtuve el título de 
          Técnico en Programación tras especializarme por tres años. Ahora, en la UAQ, en la Licenciatura en 
          Ingeniería de Software, amplío mis habilidades. Complementé mi formación con cursos de cuatro meses en bases 
          de datos y aplicaciones de inteligencia artificial. Mi sólida formación técnica y compromiso con el 
          aprendizaje continuo me preparan para desafíos en tecnología con entusiasmo. </Text>
        </View>

      </View>

      {/* Secciones de Habilidades, Resumen, y Contacto */}
      {/* ... Puedes seguir el mismo enfoque para estas secciones */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inicio: {
    backgroundColor: '#bfac8b',
    paddingVertical: 50,
    paddingHorizontal: 10,
    height: 400,
  },
  inicioHeader: {
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    color: 'black',
    fontSize: 35,
  },
  inicioSubHeader: {
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    paddingBottom: 4,
  },
  imagenContainer: {
    alignItems: 'center',
    height: 350,
  },
  imagen: {
    padding: 12,
    height: 180,
    borderRadius: 90,
    borderWidth: 20,
    borderColor: '#46a492',
  },
  sobreMi: {
    backgroundColor: '#f6f5cd',
    paddingTop: 20,
    fontFamily: 'Roboto',
    paddingBottom: 10,
  },
  sobreMiSubHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000706',
    fontSize: 28,
  },
  parrafoColorContainer: {
    backgroundColor: '#f6f5cd',
    padding: 8,
    textAlign: 'center',
  },
  parrafoColor: {
    textAlign: 'left',
    fontSize: 20,
  },
  parrafo1Container: {
    padding: 8,
    backgroundColor: '#e7dd96',
    alignItems: 'justify',
  },
  parrafo1titulo:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  parrafo1: {
    textAlign: 'justify',
    fontSize: 20,
  },
  parrafo2Container: {
    padding: 8,
    backgroundColor: '#f6f5cd',
    alignItems: 'justify',
  },
  parrafo2titulo:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  parrafo2: {
    textAlign: 'justify',
    fontSize: 20,
  },
  // Agrega estilos para las otras secciones según sea necesario
});

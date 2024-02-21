import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, FlatList, StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {

  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg',
    },
    {
      id: 2,
      name: 'Cars',
      director: 'John Lasseter',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Joss Wedon',
      url: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 4,
      name: 'El Laberinto del Fauno',
      director: 'Guillermo del Toro',
      url: 'https://pics.filmaffinity.com/El_laberinto_del_fauno-222302534-large.jpg',
    },
    {
      id: 5,
      name: 'Lo que el agua se llevo',
      director: 'Sam Fell, David Bowers',
      url: 'https://m.media-amazon.com/images/I/81ZVcfVQ9GL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 6,
      name: 'Rapidos y Furiosos X',
      director: 'Louis Leterrier',
      url: 'https://www.universalpictures.com.mx/tl_files/content/movies/fastx/poster/01.jpg',
    },
    {
      id: 7,
      name: 'Pollitos en fuga',
      director: 'Nick Park, Peter Lord',
      url: 'https://mx.web.img3.acsta.net/pictures/19/10/31/20/42/1543548.jpg',
    },
    {
      id: 8,
      name: 'Apocalypto',
      director: 'Mel Gibson',
      url: 'https://sammyplaysdirty.com/wp-content/uploads/2020/03/18837905-1.jpg',
    },
    {
      id: 9,
      name: 'Milagros del cielo',
      director: 'Patricia Riggen',
      url: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/631230.jpg',
    },
    {
      id: 10,
      name: 'It',
      director: 'Andrés Muschiett',
      url: 'https://i.pinimg.com/222x/a3/d8/1c/a3d81c6e6dddf6226a80b0ce57aa82dd.jpg',
    },
  ];

  const [movies, setMovies] = useState(moviesList);

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.url,
        }}
      />
      <Text style={styles.textName}>{item.name}</Text>
      <Text style={styles.textDirector}>Director: {item.director}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Movies App! 🍿</Text>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  movieContainer: {
    width: width / 2 - 20,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#141414',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 210, 
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#fff',
  },
  textDirector: {
    fontSize: 14,
    marginBottom: 10,
    color: '#ccc',
  },
});

export default App;

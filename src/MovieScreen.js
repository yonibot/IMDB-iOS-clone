import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {inject, observer} from 'mobx-react';
import DataStore from './Stores/DataStore';

@observer
class MovieScreen extends Component {
  static navigationOptions = {
    title: DataStore.selectedMovie ? DataStore.selectedMovie.title : 'Movie' 
  }

  componentDidMount() {
    DataStore.fetchFullMovieDetails(DataStore.selectedMovie.id);
  }

  render() {
    const movie = DataStore.selectedMovie;
    return (
      <View style={styles.container}>
        <Text>ID: {movie.id}</Text>
        <Text>UUID: {movie.uuid}</Text>
        <Text>Trailer URL: {movie.trailerUrl}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
});

export {MovieScreen as default};
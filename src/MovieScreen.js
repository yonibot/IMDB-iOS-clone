import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {inject, observer} from 'mobx-react';
import DataStore from './Stores/DataStore';
import Trailer from './components/Trailer';


@observer
class MovieScreen extends Component {
  static navigationOptions = {
    title: DataStore.selectedMovie ? DataStore.selectedMovie.title : 'Movie' 
  }

  async componentDidMount() {
    await DataStore.fetchFullMovieDetails(DataStore.selectedMovie.id);
  }

  render() {
    const movie = DataStore.selectedMovie;
    return (
      <View style={styles.container}>
        <Trailer 
          movie={movie} />
        {/* <Synopis
          movie={movie} />
        <Ratings
          movie={movie} />
        <Recommendations
          movies={} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  trailer: {
    flex: 0.3
  }
});

export {MovieScreen as default};
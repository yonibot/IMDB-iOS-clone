import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
  FlatList,
} from 'react-native';
import MovieItem from './MovieItem';
import {inject, observer} from 'mobx-react';

@inject('dataStore', 'navigation') @observer
class ResultsList extends Component {
  setMovie = (item) => {
    this.props.dataStore.setMovie(item);
    this.props.navigation.navigate('MovieScreen');
  }

  render() {
    console.log(this.props.movies);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.movies.map(x=> {
            return {...x, key: x.id}
            })}
          renderItem={(i=>{
            return (
              <MovieItem 
                item={i.item} 
                setMovie={this.setMovie} />
            )
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f3542',
    flex: 0.9
  },
});

export {ResultsList as default};
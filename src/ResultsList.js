import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
  FlatList,
  Animated,
} from 'react-native';
import MovieItem from './MovieItem';
import {inject, observer} from 'mobx-react';
import style from './common/styles';
import Spinner from './Spinner';


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
        { this.props.dataStore.querying ? (
            <Spinner style={styles.spinner} />
          ) : 
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
        /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f3542',
    flex: 0.9
  },
  spinner: {
    color: style.lightGray
  }
});

export {ResultsList as default};
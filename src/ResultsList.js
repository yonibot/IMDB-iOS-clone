import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
  FlatList,
} from 'react-native';
import MovieItem from './MovieItem';


class ResultsList extends Component {
  render() {
    console.log(this.props.movies);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.movies.map(x=> {
            return {...x, key: x.id}
            })}
          renderItem={(i=>{
            return <MovieItem item={i.item} />
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
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {inject, observer} from 'mobx-react';
import DataStore from './Stores/DataStore';

class MovieScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ID: {DataStore.selectedMovie.id}</Text>
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
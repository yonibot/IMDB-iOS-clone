import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class MovieScreen extends Component {
  render() {
  	debugger;
    return (
      <View style={styles.container}>
        <Text>ID: { this.props.navigation.state.params.id}</Text>
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
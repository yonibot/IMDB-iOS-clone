import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import {Provider} from 'mobx-react';
import Search from './src/Search';
import DataStore from './src/Stores/DataStore';

class App extends Component {
  render() {
    return (
      <Provider dataStore={DataStore}>
        <View style={styles.container}>
        	<Search />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export {App as default};
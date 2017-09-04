import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import {Provider, observer} from 'mobx-react';
import Search from './src/Search';
import DataStore from './src/Stores/DataStore';
import MovieScreen from './src/MovieScreen';
import {observable} from 'mobx';
import {StackNavigator} from 'react-navigation';

console.ignoredYellowBox = ['Remote debugger'];

@observer
class App extends Component {
  static navigationOptions = {
    title: 'Search IMDB'
  }

  render() {
    return (
      <Provider dataStore={DataStore} navigation={this.props.navigation}>
        <View style={styles.container}>
          <Search />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

const AppNavigator = StackNavigator({
  Home: { screen: App },
  MovieScreen: {screen: MovieScreen}
});



export {AppNavigator as default};
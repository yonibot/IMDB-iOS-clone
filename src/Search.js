import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import SearchBox from './SearchBox';
import ResultsList from './ResultsList';
import {inject, observer} from 'mobx-react';

@inject('dataStore') @observer
class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<SearchBox 
          onUpdateText={this.props.dataStore.updateSearchText}
          text={this.props.dataStore.searchText} />
      	<ResultsList
          movies={this.props.dataStore.movieResults} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263247',
  },
});

export {Search as default};

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
  TextInput,
} from 'react-native';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';

@observer
class SearchBox extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<TextInput
          style={styles.inputBox}
          value={this.props.text}
          placeholder='Find...'
          onChangeText={this.props.onUpdateText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#929caf',
    flex: 0.1,
    justifyContent: 'flex-end'
  },
  inputBox: {
    backgroundColor: 'white',
    opacity: 0.5,
    height: 40,
    fontSize: 15,
    paddingHorizontal: 10
  }
});

export {SearchBox as default};
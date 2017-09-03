import React from 'react';
import {
	Text,
	StyleSheet,
	View,
} from 'react-native';
import style from './common/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovieItem = ({item}) => (
	<View style={styles.container}>
	  <Text style={styles.text}>{item.title}</Text>
	  <View>
	  	<Icon name='angle-right' size={20} color={style.lightGray} />
	  </View>
	</View>
)

const styles = StyleSheet.create({
	container: {
		borderBottomColor: style.lightGray,
		borderBottomWidth: 1,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	text: {
		color: style.turquoise
	}
})


export {MovieItem as default};
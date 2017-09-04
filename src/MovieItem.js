import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	Image,
	TouchableOpacity
} from 'react-native';
import style from './common/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovieItem = (props) => (
	<TouchableOpacity 
		style={styles.container}
		onPress={()=> props.setMovie(props.item)}>
		<View style={styles.mediaItem}>
			<Image
	      style={{width: 50, height: 50, paddingRight: 20}}
	      source={{uri: `https://image.tmdb.org/t/p/w92${props.item.poster_path}`}}
	    />
		  <Text style={styles.text}>{props.item.title}</Text>
	 	</View>
	  <View>
	  	<Icon name='angle-right' size={20} color={style.lightGray} />
	  </View>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	container: {
		borderBottomColor: style.lightGray,
		borderBottomWidth: 1,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	mediaItem: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		color: style.turquoise,
		paddingLeft: 10
	}
})


export {MovieItem as default};
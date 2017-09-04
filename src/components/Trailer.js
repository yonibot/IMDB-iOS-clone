import React from 'react';
import {
	StyleSheet,
	WebView,
	View,
	Text
} from 'react-native';

const Trailer = ({movie}) => (
	<View style={styles.container}>
		<WebView
			source={{uri: movie.trailerUrl}}
			style={styles.video} />
		<View style={styles.titleBar}>
			<View style={styles.titleText}>
				<Text>{movie.title}</Text>
			</View>
			<View style={styles.actions}>
			</View>
		</View>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	video: {
		flex: 0.8
	},
	titleBar: {
		flex: 0.2
	},
	titleText: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	actions: {}
})

export {Trailer as default};
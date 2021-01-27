import React, {Component} from 'react';
import { StyleSheet, Image, View } from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
  	margin: 50,
    width: 100,
    height: 100,
  },
});

export default class SimpleFirstComponent extends Component {
	render() {
		return (
			<Image
          		style={styles.tinyLogo}
          		source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        	/>
		);
	}
}
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// const AnimatedSpinner = Animated.createAnimatedComponent(Icon);

class Spinner extends Component {

  render() {
    return (
      <Icon name='gear' size={15} style={[this.props.style]} />
    );
  }
}

export {Spinner as default};
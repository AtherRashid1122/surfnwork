import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, Image} from 'react-native';

import {splash} from '../../aseets';
import styles from './styles';
//redux

class Splash extends Component {
  state = {};

  componentDidMount = () => {
    this.splashDone();
  };

  splashDone = () => {
    setTimeout(() => {
      this.props.navigation.navigate('InteroSlider');
    }, 2000);
  };

  render() {
    return (
      <View style={styles.maiPnContainer}>
        <StatusBar hidden={true} />
        <ImageBackground
          source={splash}
          style={styles.splashStyle}
          resizeMode={'contain'}></ImageBackground>
      </View>
    );
  }
}

export default Splash;

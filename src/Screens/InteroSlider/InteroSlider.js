import React, {Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import theme from '../../theme';
import {slide1, slide2, slide3} from '../../aseets';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
const slides = [
  {
    key: '1',
    image: slide1,
    heading: 'Looking for Talent',
    details: 'Easily find talented people for \n your projects',
    buttonText: 'Next',
  },
  {
    key: '2',
    image: slide2,
    heading: 'Work With Companies',
    details:
      ' Let your projects handled by individual \n freelancer and companies',
    buttonText: 'Next',
  },
  {
    key: '3',
    image: slide3,
    heading: 'Post Project',
    details: ' ost your projects and start getting \n proposal instantly',
    buttonText: 'Get Started',
  },
];
export default class IntroSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  onDone = async () => {
    await AsyncStorage.setItem('Slider', 'viewed');
    const {navigate} = this.props.navigation;
    navigate('Login');
  };
  renderNextButton = () => {
    return (
      <View style={styles.nextBtnStyle}>
        <Text style={styles.buttonTextStyle}>Log in</Text>
      </View>
    );
  };
  renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={styles.nextBtnStyle}
        onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={styles.buttonTextStyle}>Log in</Text>
      </TouchableOpacity>
    );
  };
  renderSkipButton = () => {
    return (
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text
          // onPress={() => this.props.navigation.navigate('Register')}
          style={[styles.skipText, {color: 'white'}]}>
          New member?
        </Text>
        <TouchableOpacity>
          <Text style={[styles.skipText1, {marginLeft: 7, color: '#F08B61'}]}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  renderItem = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={item.image}
          style={styles.slider1Style}
          resizeMode={'contain'}>
          <View style={styles.textContainer}>
            <Text style={styles.headingStyle}>{item.heading}</Text>
            <Text style={styles.detailStyle}>{item.details}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        activeDotStyle={styles.activeDotStyle}
        renderItem={this.renderItem}
        data={slides}
        renderDoneButton={this.renderDoneButton}
        renderNextButton={this.renderNextButton}
        renderSkipButton={this.renderSkipButton}
        bottomButton
        showSkipButton
      />
    );
  }
}

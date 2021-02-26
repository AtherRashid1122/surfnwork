import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import styles from './styles';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
import {CheckBox} from 'react-native-elements';

export default class SecurityQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      question: 'The name of the street you grew up on',
      checked: false,
    };
  }

  render() {
    const {answer, question} = this.state;
    return (
      <View style={styles.main}>
        <View style={{flex: 0.3, top: 50}}>
          <Text style={styles.largeText}> Let’s make sure it’s you </Text>
          <Text style={[styles.mediumText]}>
            {
              'We dont recognize the device you’re using.\n please answer your security question below'
            }
          </Text>
        </View>
        <View style={{flex: 0.7}}>
          <Text style={[styles.question, {alignSelf: 'center'}]}>
            {question}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your answer "
            keyboardType={'default'}
            placeholderTextColor="gray"
            value={answer}
            onChangeText={(answer) => {
              this.setState({answer: answer});
            }}
          />
          <Text
            style={{
              color: theme.colors.primary,
              width: '80%',
              alignSelf: 'center',
              fontFamily: Fonts.Quicksand_Bold,
            }}>
            {'Forgot your security answer?'}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.buttonStyle]}
            onPress={() => this.props.navigation.navigate('Home')}>
            {this.state.loading === true ? (
              <ActivityIndicator animating color="white" />
            ) : (
              <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '80%',
              marginLeft: 15,
            }}>
            <CheckBox
              containerStyle={{backgroundColor: 'white', borderColor: 'white'}}
              title="Remember this device"
              checked={this.state.checked}
              onPress={() => this.setState({checked: true})}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

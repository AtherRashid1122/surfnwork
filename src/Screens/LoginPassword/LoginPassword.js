import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {SocialIcon, colors} from 'react-native-elements';
import styles from './styles';
import {logo} from '../../aseets';
import {Divider} from 'react-native-elements';

class LoginPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: 'nicky.hasan82@gmail.com',
      loading: false,
      isSigninInProgress: false,
      userInfo: null,
    };
  }

  render() {
    const {password, email} = this.state;
    return (
      <View style={{flex: 1}}>
        <Image
          source={logo}
          style={{
            marginTop: '10%',
            width: '85%',
            alignSelf: 'center',
          }}
          resizeMode={'contain'}
        />
        <Text
          style={[styles.largeText, {alignSelf: 'center', marginTop: '5%'}]}>
          {email}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Password "
          keyboardType={'default'}
          placeholderTextColor="gray"
          value={password}
          onChangeText={(password) => {
            this.setState({password: password});
          }}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('SecurityQuestions')}>
          {this.state.loading === true ? (
            <ActivityIndicator animating color="white" />
          ) : (
            <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
          )}
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Text style={[styles.mediumText]}>Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.mediumText]}>Not you</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginPassword;

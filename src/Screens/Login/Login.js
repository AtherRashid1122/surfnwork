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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      isSigninInProgress: false,
      userInfo: null,
    };
  }

  render() {
    const {email, password} = this.state;
    return (
      <View style={{flex: 1}}>
        <Image
          source={logo}
          style={{
            // height: 200,
            // backgroundColor: 'skyblue',
            marginTop: '2%',
            width: '100%',
            alignSelf: 'center',
          }}
          resizeMode={'contain'}
        />
        <Text
          style={[styles.largeText, {alignSelf: 'center', marginTop: '2%'}]}>
          Login and get back to work
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email "
          keyboardType={'email-address'}
          placeholderTextColor="gray"
          value={email}
          onChangeText={(email) => {
            this.setState({email: email});
          }}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={
            (() => this.setState({sending: true}),
            () => this.props.navigation.navigate('LoginPassword'))
          }>
          {this.state.loading === true ? (
            <ActivityIndicator animating color="white" />
          ) : (
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Continue
            </Text>
          )}
        </TouchableOpacity>

        <View
          style={{flexDirection: 'row', marginTop: '5%', alignSelf: 'center'}}>
          <Divider style={{height: 2, width: 60, alignSelf: 'center'}} />
          <Text
            style={{marginHorizontal: 10, color: 'grey'}}
            // onPress={() => {
            //   this.props.navigation.navigate('Signup');
            // }}
          >
            or
          </Text>
          <Divider style={{height: 2, width: 60, alignSelf: 'center'}} />
        </View>
        <View style={{bottom: -10}}>
          <SocialIcon
            style={{
              width: '80%',
              alignSelf: 'center',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              height: 50,
            }}
            light
            iconColor="blue"
            title="Sign In With Google"
            button
            type="google"
          />
          <SocialIcon
            style={{
              width: '80%',
              alignSelf: 'center',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              height: 50,
            }}
            light
            title="Sign In With Facebook"
            button
            type="facebook"
          />
          <SocialIcon
            style={{
              width: '80%',
              height: 50,
              alignSelf: 'center',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            light
            title="Sign In With Linkdin"
            button
            type="linkedin"
          />
        </View>
      </View>
    );
  }
}

export default Login;

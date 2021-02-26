import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import InteroSlider from '../../Screens/InteroSlider';
import Login from '../../Screens/Login';
import LoginPassword from '../../Screens/LoginPassword';
import SecurityQuestions from '../../Screens/SecurityQuestions';

//AuthStack
const authStack = createStackNavigator(
  {
    InteroSlider: {
      screen: InteroSlider,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    LoginPassword: {
      screen: LoginPassword,
      navigationOptions: {
        headerShown: false,
      },
    },
    SecurityQuestions: {
      screen: SecurityQuestions,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {initialRouteName: 'Login'},
);

export default authStack;

import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Splash from '../Screens/Splash';
import HomeStack from './Stacks/HomeStack';
//Stacks
import AuthStack from './Stacks/AuthStack';
import DrawerNav from './Drawer';
import TabScreen from '../Screens/TabScreen';
console.disableYellowBox = true;
const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Auth: {
      screen: AuthStack,
    },
    App: {
      screen: DrawerNav,
      // screen: TabScreen,
    },
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(AppNavigator);

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Content from './Content';
// import { user } from '../../assets';
import theme from '../../theme';
import ActiveInvitations from '../../Screens/ActiveInvitations';
import SendInvitation from '../../Screens/SendInvitation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TabScreen from '../../Screens/TabScreen';
import HomeStack from '../Stacks/HomeStack';

const drawerNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <AntDesign name="home" size={24} color={tintColor} />
        ),
      },
    },
    'Inbox / Jobs': {
      screen: TabScreen,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <AntDesign name="home" size={24} color={tintColor} />
        ),
      },
    },
    'Active Invitations': {
      screen: ActiveInvitations,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <AntDesign name="home" size={24} color={tintColor} />
        ),
      },
    },
    'Send Invitation': {
      screen: SendInvitation,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <AntDesign name="home" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    drawerLockMode: 'unlocked',
    drawerType: 'front',
    drawerBackgroundColor: 'white',
    drawerPosition: 'left',
    contentComponent: Content,
    contentOptions: {
      activeTintColor: theme.colors.primary,
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#f1f1f1',
    },
  },
);

export default drawerNav;

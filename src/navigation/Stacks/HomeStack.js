import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../Screens/Home';
import Freelancers from '../../Screens/Freelancers';
import RecentSearch from '../../Screens/RecentSearch';
import ActiveInvitations from '../../Screens/ActiveInvitations';
const homeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    RecentSearch: {
      screen: RecentSearch,
      navigationOptions: {
        headerShown: false,
      },
    },
    Freelancers: {
      screen: Freelancers,
      navigationOptions: {
        headerShown: false,
      },
    },
    ActiveInvitations: {
      screen: ActiveInvitations,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {initialRouteName: 'Home'},
);

export default homeStack;

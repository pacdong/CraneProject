import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AppStackNavigator from '../navigation/AppStackNavigator'


export default createAppContainer(
  createSwitchNavigator({
    AuthLoading : AuthLoadingScreen,
    Main: MainTabNavigator,
    AuthStackNavigator,
    Chat: AppStackNavigator,

  },{
    // initialRouteName : 'AuthStackNavigator',
    initialRouteName : 'Main',
  })
);

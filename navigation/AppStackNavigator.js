import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Chatroom from '../screens/Chatroom';

const AppStackNavigator = createStackNavigator(
  {
    Chat: { screen: Chatroom },
  },
  {
    initialRouteName: 'Chat',
  }
);

export default AppStackNavigator;

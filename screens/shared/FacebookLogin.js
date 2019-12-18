import React from 'react';
import * as Facebook from "expo-facebook";

const FacebookLogin = async function logIn() {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync('438206136852107' );
    console.log(type);
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      console.log(type);
      this.props.navigation.navigate('Main');
    } else {
      this.props.navigation.navigate('Login');
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

export default FacebookLogin;
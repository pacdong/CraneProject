import React from 'react';
import { Facebook } from "expo";

export default class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      async function logIn() {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('438206136852107', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            this.props.navigation.navigate('Main');
          } else {
            this.props.navigation.navigate('Login');
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
    )
  }
}
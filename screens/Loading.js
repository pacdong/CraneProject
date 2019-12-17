import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Loading extends Component {
  timer;

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('AuthStackNavigator');
    }, 1500);
  }

  componentWillMount() {
    if(this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
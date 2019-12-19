import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { Container, Content, Icon } from 'native-base';
import CardComponent from './shared/CardComponent';

export default class Chatroom extends Component {
  static navigationOptions = {
    title: '크레인 커뮤니티',
    headerLeft:<MaterialCommunityIcons name='crane' size={32} style={{ padding:10 }}/>,
  }

  render() {
      return (
              <View style={styles.container}>
                <Content>
                    <CardComponent />
                </Content>
              </View>
      );
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
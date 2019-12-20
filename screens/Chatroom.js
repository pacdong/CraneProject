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
  
  fetchFeeds = async function() {
    const data = {
        id: 1,
        jsonrpc: "2.0",
        method: "call",
        params: [
          "database_api",
          "get_discussions_by_created",
          [{ tag: "kr", limit: 20 }]
        ]
    }; const res = await fetch(`https://api.steemit.com`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const res_1 = await res.json();
    return res_1.result;
}

state = {
  feeds: []
}

UNSAFE_componentWillMount() {
  this.fetchFeeds().then(feeds => {
      this.setState({
        feeds
      })
  });
}

  render() {
      return (
        <Container style={styles.container}>
          <Content>
            {
              this.state.feeds.map(feed => <CardComponent data={ feed }/>)
            }
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});


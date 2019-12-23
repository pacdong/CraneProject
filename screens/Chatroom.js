import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import CardComponent from './shared/CardComponent';

export default class Chatroom extends Component {
  static navigationOptions = {
    title: '크레인 커뮤니티',
    headerLeft:<MaterialCommunityIcons name='crane' size={32} style={{ paddingLeft:10 }}/>,
  }
  
  fetchFollowing = async function() {
    const data = {
        id: 2,
        jsonrpc: "2.0",
        method: "call",
        params: [
          "follow_api",
          "get_following",
          ["anpigon", "", "blog", 10]
        ]
    };
    return fetch('https://api.steemit.com',
    {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => res.result.map(({following}) => following))
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
    feeds: [],
    followings: []
  }

UNSAFE_componentWillMount() {
  this.fetchFollowing().then(followings => {
    this.setState({
      followings
    })
  });

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
            <View style={{ height: 100 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                    <Text style={{ fontWeight: 'bold' }}>Stories</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Icon name="md-play" style={{fontSize:14}}></Icon>
                        <Text style={{fontWeight:'bold'}}> Watch All</Text>
                    </View>
                </View>
            </View>
            <View Style={{ flex:3 }}>
              <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
              alignItems: 'center',
              paddingStart: 5,
              paddingEnd: 5
            }}>
                {
                  this.state.followings.map(following => <Thumbnail 
                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                    source={{uri: `https://steemitimages.com/u/${following}/avatar` }} />)
                }
              </ScrollView>
            </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  thumbnail: {
    marginHorizontal: 5, 
    borderColor: 'pink', 
    borderWidth: 2
  }
});


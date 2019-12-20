import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { CRANEHOOK } from '../../utils/Icons';
import axios from 'axios';

export default class CardCompnent extends Component{
  render(){
  const { data }  = this.props; // 피드 항목 데이터
    const _log = function () {
      console.log(data);
    }
    return (
      <Card>
        {_log()}
        {/* <CardItem>
          <Left>
            <Thumbnail source={{ uri: `http://192.168.0.100:9001${data.img}` }} />
            <Body>
              <Text>{data.user.nick}</Text>
              <Text note>{new Date(data.created).toDateString()}</Text>
            </Body>
          </Left>
        </CardItem> */}
        {
          data.img ?
          <CardItem cardBody>
            <Image 
              source={{ uri: `http://192.168.0.100:9001${data.img}` }} 
              style={{ maxHeight: 500, minHeight:300, width:null, flex: 1 }} />
          </CardItem> : null
        }
        {/* <CardItem style={{ height: 20 }}>
          <Text>{ data.active_votes.length } likes</Text>
        </CardItem> */}
        <CardItem>
          <Text style={{ fontWeight:'900'}}>{ data.content }</Text>
        </CardItem>
        {/* <CardItem>
          <Text>
          { data.body.replace(/\n/g,' ').slice(0, 200) }
          </Text>
        </CardItem> */}
        {/* <CardItem style={{ height:45 }}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart' style={{ color:'black', marginRight: 5 }}/> 
              <Text>{ data.active_votes.length }</Text>
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles' style={{ color:'black', marginRight: 5 }}/>
              <Text>{ data.children }</Text>
            </Button>
            <Button transparent>
              <Icon name='ios-send' style={{ color:'black' }}/>
            </Button>
          </Left>
          <Right>
            <Text>{ data.pending_payout_value }</Text>
          </Right>
        </CardItem> */}
      </Card>
    );
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
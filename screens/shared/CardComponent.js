import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { CRANEHOOK } from '../../utils/Icons';
import axios from 'axios';

export default class CardCompnent extends Component{
  render(){
    return (
      <>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ CRANEHOOK }} />
            <Body>
              <Text>rednjzz</Text>
              <Text note>Jan 21, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image 
            source={{ uri: 'http://192.168.0.100:8001/img/157231340529315741621822741576672770453.gif' }} 
            style={{ maxHeight: 500 , height:300, width:null, flex: 1 }} />
        </CardItem>
        <CardItem style={{ height:45 }}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart' style={{ color:'black' }}/>
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles' style={{ color:'black' }}/>
            </Button>
            <Button transparent>
              <Icon name='ios-send' style={{ color:'black' }}/>
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>101 likes</Text>
        </CardItem>
        <CardItem>
          <Text>
            <Text style={{ fontWeight:'900'}}>rednjzz</Text>
              #test2
            </Text>
          </CardItem>
        </Card>
         <Card>
         <CardItem>
           <Left>
             <Thumbnail source={{ CRANEHOOK }} />
             <Body>
               <Text>rednjzz</Text>
               <Text note>Jan 21, 2019</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem cardBody>
           <Image 
             source={{ uri: 'http://192.168.0.100:8001/img/15763230930061576658731585.gif' }} 
             style={{ height:300, width:null, flex: 1 }} />
         </CardItem>
         <CardItem style={{ height:45 }}>
           <Left>
             <Button transparent>
               <Icon name='ios-heart' style={{ color:'black' }}/>
             </Button>
             <Button transparent>
               <Icon name='ios-chatbubbles' style={{ color:'black' }}/>
             </Button>
             <Button transparent>
               <Icon name='ios-send' style={{ color:'black' }}/>
             </Button>
           </Left>
         </CardItem>
         <CardItem style={{ height: 20 }}>
           <Text>101 likes</Text>
         </CardItem>
         <CardItem>
           <Text>
             <Text style={{ fontWeight:'900'}}>rednjzz</Text>
               #민몸
             </Text>
           </CardItem>
         </Card>
         </>
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
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  Container,
          Button,
          Header,
          Left,
          Body,
          Title,
          Content,
          Icon,
          Drawer
       } from 'native-base';

export default class Segundaria extends React.Component {

  render() {
    return (
<Container>
 <View style={{ height:Expo.Constants.statusBarHeight }} />
  <Header style={{
    backgroundColor: '#1fb2a8'
  }}>

    <Body><Title>SideBar</Title></Body>
  </Header>
    <Content style={{
      backgroundColor: 'white'
    }}>
      <View >
        <Text>SideBar!</Text>
      </View>
    </Content>
</Container>
    );
  }
}

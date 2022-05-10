import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { View } from 'react-native';
export const OnboardingScreen = ({ navigation, route }) => {
  return (
    <Layout style={{flex: 1, padding:16}}>
      <Text style={{paddingBottom:16}}category="h1">Welcome to Kuka</Text>
      <Text style={{}} category="p1">KUKA NOW app allows people to submit video testimonies to voice their opinions on various topics. Many people are not able to book flights to Honolulu from other islands. As well, many people have busy schedules and may not be available for in-person testimonies. Another advantage of the app is that people can record testimonies at the place they are discussing.</Text>
      <View style={{justifyContent: "flex-end", flex:1}}><Button style={{}}>LETS GET STARTED!</Button></View>
    </Layout>
  );
};
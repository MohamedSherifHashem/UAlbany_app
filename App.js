import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState }from "react";
import {  ScrollView,Platform,Dimensions , StyleSheet,View,Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { theme, withGalio, GalioProvider ,Button,Accordion,Block,Checkbox, Icon, Text, NavBar,Card,DeckSwiper, Toast,Input,Radio,Slider,Switch} from 'galio-framework';
import {userDimentions} from '@react-native-community/hooks';

import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/homeStack';
import { createStackNavigator } from '@react-navigation/stack';


import { LinearGradient as Gradient } from 'expo';
import { color } from 'react-native-reanimated';


   










const Stack = createStackNavigator();
/*
const StackNavigator = (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen} // <----
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen} // <----
    />
     <Stack.Screen
      name="Name"
      component={NameScreen} // <----
    />
    <Stack.Screen
      name="Important Phone Numbers"
      component={PhoneNumbers} // <----
    />
    <Stack.Screen
      name="Service"
      component={Servicelist} // <----
    />
  </Stack.Navigator>
);
*/
function App() {
  return (
    /*<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="Important Phone Numbers" component={PhoneNumbers} />
        <Stack.Screen name="Service" component={Servicelist} />
      </Stack.Navigator>
    </NavigationContainer>*/

    <Navigator/>
  );
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#442c72',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

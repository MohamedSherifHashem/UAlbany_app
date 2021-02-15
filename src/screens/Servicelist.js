import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState }from "react";
import {  ScrollView,Platform,Dimensions , StyleSheet,View,Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { theme, withGalio, GalioProvider ,Button,Accordion,Block,Checkbox, Icon, Text, NavBar,Card,DeckSwiper, Toast,Input,Radio,Slider,Switch} from 'galio-framework';
import {userDimentions} from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient as Gradient } from 'expo';
import { color } from 'react-native-reanimated';


export default function Servicelist({ navigation }) {
 
    return (
  
     
      <View style={{ backgroundColor: '#B19CD9', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
  
          <Button  size = "large" color="#777777"  onPress={() => navigation.navigate('Details')}>More Details</Button>
        <Button size = "large" color="green" onPress={()=>Alert.alert("Continue ","Are you sure you want to continue?",[
           {text: "Yes", onPress: console.log("Yes")},
           {text: "No", onPress: console.log("No")},
          ])}>Financial Services</Button>
        <Button size = "large" color="theme">Family Services </Button>
        <Button size = "large" color="orange">Mental Health</Button>
  
        <Button  size = "large" color="#555555"  onPress={() => navigation.navigate('Name')}>Enter Name</Button>
        <Button  size = "large" color="#32B76A"  onPress={() => navigation.navigate('PhoneNumbers')}>Important Phone Numbers</Button>
        

  
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#442c72',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });
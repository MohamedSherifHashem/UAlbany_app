
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState }from "react";
import {  ScrollView,Platform,Dimensions , StyleSheet,View,Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { theme, withGalio, GalioProvider ,Button,Accordion,Block,Checkbox, Icon, Text, NavBar,Card,DeckSwiper, Toast,Input,Radio,Slider,Switch} from 'galio-framework';
import {userDimentions} from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient as Gradient } from 'expo';
import { color } from 'react-native-reanimated';


export default function DetailsScreen({ navigation }) {
    const elements = [
      <View style={{ backgroundColor: '#B23AFC', height: 200, width: 250 }}>
        <Text>When was the University at Albany founded? </Text>
        <Text>1844</Text>
      </View>,
      <View style={{ backgroundColor: '#FE2472', height: 200, width: 250 }}>
        <Text>It provides several services</Text>
      </View>,
      <View style={{ backgroundColor: '#FF9C09', height: 200, width: 250 }}>
        <Text> UAlbany provides mental healh services</Text>
      </View>,
      <View style={{ backgroundColor: '#45DF31', height: 200, width: 250 }}>
        <Text>Ualbany provides numerous grants and scholarships</Text>
      
      </View>
    ];
    
    
    
    return (
  
      
     
      <View style={{ backgroundColor: '#B19CD9', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
  
  
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
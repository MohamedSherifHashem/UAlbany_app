
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState }from "react";
import {  ScrollView,Platform,Dimensions , StyleSheet,View,Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { theme, withGalio, GalioProvider ,Button,Accordion,Block,Checkbox, Icon, Text, NavBar,Card,DeckSwiper, Toast,Input,Radio,Slider,Switch} from 'galio-framework';
import {userDimentions} from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient as Gradient } from 'expo';
import { color } from 'react-native-reanimated';




export default function NameScreen({ navigation }) {
 
    return (
  
     
      <View style={{ backgroundColor: '#B19CD9', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Radio label="Mr." color="black" alignItems = "left"  />
      <Radio label="Mrs." color="Black"  />
      <Radio label="Other" color="Black"  />
      <Input placeholder="Input Name" color={theme.COLORS.THEME} style={{ borderColor: theme.COLORS.THEME }} placeholderTextColor={theme.COLORS.THEME} />
      <Input placeholder="password" password viewPass />
      <Input
        placeholder="Input with Icon on right"
        right
        icon="upcircle"
        family="antdesign"
        iconSize={14}
        iconColor="red"
      />
      
        <Checkbox color="Black" onChange={() => alert('Name Change Successful')} label="Check to save new name" /> 
        <Button  size = "large" color="black"  onPress={() => navigation.navigate('Servicelist')}>Go Back</Button>
  
  
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
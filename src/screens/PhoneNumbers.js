
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState }from "react";
import {  ScrollView,Platform,Dimensions , StyleSheet,View,Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { theme, withGalio, GalioProvider ,Button,Accordion,Block,Checkbox, Icon, Text, NavBar,Card,DeckSwiper, Toast,Input,Radio,Slider,Switch} from 'galio-framework';
import {userDimentions} from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient as Gradient } from 'expo';
import { color } from 'react-native-reanimated';


export default function PhoneNumbers({ navigation }) {
    const data = [
      { title: "Campus Police", content: "(518) 442-3131", 
        icon: {
          family: 'MaterialIcons',
          name: 'security',
          size: 16,
        } 
     },
      { title: "University General Number", content: "(518) 442-3300", icon: {
        family: 'MaterialIcons',
        name: 'call',
        size: 16,
      }  },
      { title: "Financial Services", content: " (518) 442-3202", icon: {
        family: 'MaterialIcons',
        name: 'attach-money',
        size: 16,
      }   },
      { title: "Snow Emergency", content: "(518) 442-SNOW" ,icon: {
        family: 'MaterialIcons',
        name: 'help',
        size: 16,
      }  }
    ];
   
    return (
  
     
      <View style={{ backgroundColor: '#B19CD9', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
      <Block style={{ height: 200,backgroundColor: '#B19CD9', color:"#B19CD9" , justifyContent: 'center'} }>
        <Accordion dataArray={data} listStyle={{color: "#B19CD9"} }/>
      </Block>
        
      
       
        <Button  size = "large" color="#555555"  onPress={() => navigation.navigate('Servicelist')}>Go Back</Button>
  
  
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
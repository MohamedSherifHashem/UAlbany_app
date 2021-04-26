
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState }from "react";
import {  ScrollView,Platform,Dimensions , StyleSheet,View,Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { theme, withGalio, GalioProvider ,Button,Accordion,Block,Checkbox, Icon, Text, NavBar,Card,DeckSwiper, Toast,Input,Radio,Slider,Switch} from 'galio-framework';
import {userDimentions} from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient as Gradient } from 'expo';
import { color } from 'react-native-reanimated';


export default function HomeScreen({navigation}) {
    const clickHandler = () => {
    navigation.navigate('Servicelist');
    } 
    return (
      <SafeAreaView style={styles.container} > 
       
      
  
      <View style={{
        backgroundColor: '#442c72',
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
      }}>
  
       <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image
  
  fadeDuration={1000}
  resizeMethod = {"auto"}
  
  source ={{
    width:400,
    height:300,
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Albany_Great_Danes_logo.svg/1200px-Albany_Great_Danes_logo.svg.png"
    
  }}
  />
       </TouchableOpacity>
  
       <Button round uppercase color="#efcc00"
        /* onPress={()=>Alert.alert("Start the App","Click Yes to start App or No to exit",[
           {text: "Yes", onPress: console.log("Yes")},
           {text: "No", onPress: console.log("No")},
          ])}*/
          
          
          onPress={clickHandler}
          >Get Started</Button>
        <StatusBar style="auto" />
  </View>
      </SafeAreaView>
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
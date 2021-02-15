import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Platform,Dimensions , StyleSheet,View, Text,Image, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { Button } from 'galio-framework';


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
       onPress={()=>Alert.alert("Start the App","Click Yes to start App or No to exit",[
         {text: "Yes", onPress: console.log("Yes")},
         {text: "No", onPress: console.log("No")},
        ])}
        
        
        
        >Get Started</Button>
      <StatusBar style="auto" />
</View>
    </SafeAreaView>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#442c72',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });
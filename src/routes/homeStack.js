import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
//import GetStarted from '../screens/GetStarted';
//import Dashboard from '../screens/Dashboard';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Name from '../screens/Name';
import PhoneNumbers from '../screens/PhoneNumbers';
import Servicelist from '../screens/Servicelist';

import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
const screens = {
    Home:{
        screen: Home 
    },
     Details:{
        screen: Details
    },
   
   PhoneNumbers:{
        screen: PhoneNumbers 
    },
    Name:{
        screen: Name 
    },
    Servicelist:{
        screen: Servicelist 
    }
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer (HomeStack);
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from '../Screens/ChatScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import axios from 'axios';


const Stack = createStackNavigator();


export default  AppNavigator = () =>{
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={ChatScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MessageScreen" component={MessagesScreen} />
        </Stack.Navigator>
    
    );
}




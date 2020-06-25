import React from 'react';
import {  Text, View,Image, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from 'expo-image-picker';
import MessagesScreen from './MessagesScreen';
import { render } from 'react-dom';

export default ProfileScreen =()=>{

  status = {
    photo:null,
  };

    const option = {
      noDate: true

    };

    
    
      let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync(option, response => {
        if (response.uri){
          this.setState({photo:response});
        }
        });

        console.log(pickerResult);
      }
      

      const styles = StyleSheet.create({

        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        buttonText:{
          color:'red'
        }
      })

const {photo} = this.state;
      return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
            To share a photo from your phone with a friend, just press the button below!
          </Text>
          <Image
           source={{uri: photo.uri}}
           style={{width:300,height:300}}
          />
    
          <TouchableOpacity onPress={openImagePickerAsync} >
            <Text style={styles.buttonText}>Pick a photo</Text>
          </TouchableOpacity>
        </View>
      );

      
    }
  
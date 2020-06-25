import React from 'react';
import { StyleSheet, Text, View,ScrollView,Button, ViewComponent,Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

const styles = StyleSheet.create({


    itemContainer:{
      height:100,
      width:'100%',
      borderColor:'gray',
      borderWidth:1,
     flexDirection:'row',
     backgroundColor:'#fff',
      
    },
    
   
    leftContainer:{
     width:100,
     backgroundColor:'#C0C0C0',
    },
    rightContainer:{
      flex:1,
      left:10,
      justifyContent:'flex-end',
      paddingBottom:15,
    },
    companyText:{
      color:'#3366FF',
    },
    nameText:{
     
      fontSize:22,
    },
    
  });
  
  const Listitem =({imageUrl, title, author,onPress})=>{
    return (
      
        
        
        <TouchableOpacity style={styles.itemContainer}onPress={onPress}>
            <View style={styles.leftContainer}>
            <Image
                 source={{ uri:imageUrl}}
                 style={{width:100,height:100}}
            />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.nameText}>{title}</Text>
                <Text style={styles.companyText}>{author}</Text>
            </View>
            
        </TouchableOpacity>
  
    
    );
  }  

  export default Listitem;
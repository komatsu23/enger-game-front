import React,{userState,useEffect} from 'react';
import { StyleSheet,  SafeAreaView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {  FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import Listitem from './Listitem';
import articles from '../dummies/articles.json';



const Stack = createStackNavigator();

const styles = StyleSheet.create({


  container:{
    flex:1,
    
  },
 
});




export default  ChatScreen =(props)=> {
  const {navigation} = props;
  

  try{
    const result =  axios.get('https://facebook.github.io/react-native/movies.json');
      //console.log(result);
    const a = result;
    } catch (error) {
      console.log("error!!");
    }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
       data={articles}
       renderItem={({item}) => (
       <Listitem 
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
          onPress={()=> navigation.navigate("MessageScreen")}
    />
      )}
        keyExtractor={(item,index) => index.toString()}
    />
    </SafeAreaView>
  );
}
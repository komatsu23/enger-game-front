import React, { Component, PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppNavigator from './Navigator/AppNavigator';
import ProfileScreen from './Screens/ProfileScreen';



class Cards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items,
    };
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  getDataFromAPI = async () => {
    const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=20";
    const res = await fetch(endpoint);
    const data = await res.json();
    this.setState({ items: data });
  };

  _renderItem = ({ item, index }) => {
    let { cardText, card, cardImage } = styles;
    return (
      <TouchableOpacity style={card}>
        <Image style={cardImage} source={{ uri: item.url }} />
        <Text style={cardText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    let { container, loader } = styles;
    let { itmes } = this.state;
    if (items.length === 0) {
      return (
        <View style={loader}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <FlatList
        style={container}
        data={items}
        keyExtractor={(item, index) => index.toStoring()}
        renderItem={this._renderItem}
      />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  cardText: {
    fontSize: 30,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "5%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
    width: 3,
    height: 3,
    },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
  back:{
    backgroundColor: '#c0c0c0',
    height:710,
    flex:1,
 
    
  }
});

function ItemsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Items!</Text>
    </View>
  );
}

function SavesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Saves!</Text>
    </View>
  );
}

function ChatsScreen() {
  return (
    <View style={styles.back}>
       <AppNavigator/>
     <View>
      </View>
      <View>
       
      </View>
    </View>
  );
}

function GameScreen() {


  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     
     <ProfileScreen />

    </View>
  );

  }
function GuildScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  
  
    </View>
  );
}




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Items" component={ItemsScreen} />
        <Tab.Screen name="Saves" component={SavesScreen} />
        <Tab.Screen name="Chatss" component={ChatsScreen} />
        <Tab.Screen name="Game" component={GameScreen} />
        <Tab.Screen name="Guild" component={GuildScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>

  );
  
}

import React from 'react';
import { GiftedChat,Bubble , Send,Composer } from 'react-native-gifted-chat';
import {View,StyleSheet,Text} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import ProfileScreen from './ProfileScreen'



export default class MessagesScreen extends React.Component {

    //メッセージ内容をstateで管理
    componentWillMount() {
        this.setState({messages : []});
    }

    

    /*renderComposer = (props) =>{
        return(
            //画像選択
            <TouchableOpacity  onPress={this.openImagePickerAsync}>
                <View style={{top:2,borderWidth:1,borderColor:'red',alignItems:'center'}}>
                    <Text style={{fontSize: 30,color:'red'}}>+</Text>
                </View>
                <Composer {...props}/>
            </TouchableOpacity>
        );
    }*/

    renderMessageImage = () => {
        return(
            <View>

            </View>
        );
    }

    renderActions = (props) => {
        return(
            <TouchableOpacity onPress={this.openImagePickerAsync}>
            <View style={{justifyContent:'center',alignItems:'center',bottom:8,paddingLeft:17}}>
                <Text style={{fontSize:24,color:'red'}}>+</Text>
            </View>
            </TouchableOpacity>
        );
    }

    //保存写真
     openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
         
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        //console.log(pickerResult);
        //let url = pickerResult.uri;
        console.log(pickerResult.uri);
        
        return(
        <View>
            <Image 
                source={{uri:pickerResult.uri}}
                style={{width:300,height:300}}            
            />
        </View>
       
        
        )
      }
      

      
  
   /* renderSend = (props) =>{
        return(
            <Send   {...props}>
           
           <View>
            <Image source={require('')} resizeMode={'center'}/>
               
           </View>
           </Send>
        );
    }*/
    
   

    reply(){
        return {
            _id: 1,
            text: '',
            //createdAt: new Date().getTime();
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },

        };
    }

    //「Send」ボタンが押された時に実行されるメソッド
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(GiftedChat.append(previousState.messages, messages), this.reply()),
        }))
        console.log(messages);
    }

    render() {
        return (
            //react-native-gifted-chatが提供するコンポーネント
            
                <GiftedChat
                messages={this.state.messages}//stateで管理しているメッセージ
                onSend={messages => this.onSend(messages,this.state.image)}//送信ボタン押した時の動作
                renderComposer={this.renderComposer}
                renderActions={this.renderActions}
                image = {this.openImagePickerAsync }
                //renderSend={this.renderSend}
                user={{
                    _id: 1,
                    name: 'you',
                    avater: 'https://placeimg.com/140/140/any',
                    image:'https://placeimg.com/140/140/any'
                
                }}
                />
             
        );
    }
}



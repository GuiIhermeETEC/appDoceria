import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { ImageBackground } from 'react-native';


export default function Header(){
    return(

        <View style = {styles.viewHeader}>
                 <ImageBackground style={styles.imageBackground}source={{uri: 'https://media.discordapp.net/attachments/874487227894358056/1124156384712339508/granulado.png'}}>                      
         <TouchableOpacity> 
        <Feather style={{marginLeft:'-500%', marginTop:'-110%'}} name="menu" size={36} color="#fdd3ef" />
        </TouchableOpacity>  
        <Text style = {styles.textHeader1}>  DOCERIA </Text>
        <View style = {styles.line}></View>
        <Text style = {styles.textHeader2} >  Sua Delicia  </Text> 
                </ImageBackground>
        
        </View>
    );
}
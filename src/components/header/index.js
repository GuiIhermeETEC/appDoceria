import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function Header(){
    return(
        <View style = {styles.viewHeader}>
         <TouchableOpacity> 
        <Feather style={{marginLeft:'-500%', marginTop:'15%'}} name="menu" size={36} color="white" />
        </TouchableOpacity>  
        <Text style = {styles.textHeader1}>  DOCERIA </Text>
        <Text style = {styles.textHeader2} >  Sua Delicia  </Text>  

        </View>
    );
}
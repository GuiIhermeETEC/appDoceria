import {View} from 'react-native';
import * as React from 'react';
import{ TouchableOpacity } from 'react-native';
import{ Text } from 'react-native';
import styles from './style';
import { ImageBackground } from 'react-native';
import { Image , FlatList} from 'react-native';
import Infancia from '../../data/infancia.js';
import Gourmet from '../../data/gourmet';
import Fitness from '../../data/fitness';
import CardSeries from './cardinfancia';
import CardGourmet from './cardgourmet';
import CardFitness from './cardfitness';

export default function Box({titulo,imagem,nota}){
    return(
        <View
        // Button Linear Gradient
        style={styles.box}>
          <Text style={styles.text}>Categorias</Text>
          <View style={styles.categoria}>
          <View style={styles.circleu}><ImageBackground style={styles.imageBackground}source={{uri: 'https://media.discordapp.net/attachments/874487227894358056/1124428850198220891/p_dadinho.png'}}></ImageBackground></View>
          <View style={styles.circled}><ImageBackground style={styles.imageBackground}source={{uri: 'https://media.discordapp.net/attachments/874487227894358056/1124429667110240499/brigadeiro.png'}}></ImageBackground></View>
          <View style={styles.circlet}><ImageBackground style={styles.imageBackground}source={{uri: 'https://media.discordapp.net/attachments/874487227894358056/1124430396654887074/fitness.png?width=494&height=494'}}></ImageBackground></View>
          </View> 
          <Text style={styles.legendacirculou}>  Sabor<br></br>Infância</Text>
          <Text style={styles.legendacirculod}>  Doces<br></br>Gourmet</Text>
          <Text style={styles.legendacirculot}> Doces<br></br>Fitness</Text>
          <View style={styles.line}></View>
          <Text style={styles.titulosi}>Nostalgia? Prove sabor infância</Text>
          <View style={{width:'90%'}}>  
      <FlatList 
      showsHorizontalScrollIndicator = {false}
      horizontal = {true}
      data ={Infancia}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) =>(

        <CardSeries
          titulo = {item.nome}
          imagem = {item.imagem}
          nota = {item.notas}
          quantidade = {item.quantidade}
          peso = {item.peso}
          avaliacao = {item.avaliacao}
        ></CardSeries>

      )}
      />
</View>
<View style={styles.linesi}></View>
<Text style={styles.titulodg}>Alta qualidade? Doces Gourmet!</Text>
<View style={{width:'90%'}}>  
      <FlatList 
      showsHorizontalScrollIndicator = {false}
      horizontal = {true}
      data ={Gourmet}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) =>(

        <CardGourmet
          titulo = {item.nome}
          imagem = {item.imagem}
          nota = {item.notas}
          quantidade = {item.quantidade}
          peso = {item.peso}
          avaliacao = {item.avaliacao}
        ></CardGourmet>

      )}
      />
</View>
<View style={styles.linedg}></View>
<Text style={styles.titulodf}>Para sua dieta: Doces Fitness</Text>
<View style={{width:'90%'}}>  
      <FlatList 
      showsHorizontalScrollIndicator = {false}
      horizontal = {true}
      data ={Fitness}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item}) =>(

        <CardFitness
          titulo = {item.nome}
          imagem = {item.imagem}
          nota = {item.notas}
          quantidade = {item.quantidade}
          peso = {item.peso}
          avaliacao = {item.avaliacao}
        ></CardFitness>

      )}
      />
      
</View>
<View style={styles.linedf}></View>
          </View>
    );
    }
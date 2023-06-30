import React from "react";
import {Image, Text, TouchableOpacity} from "react-native";
import styles from "./style";

export default function CardFitness({titulo,imagem,nota, quantidade, peso, avaliacao}) {
    return(
        <TouchableOpacity style = {styles.containerJogos}>
            <Image style = {styles.images} source  ={require (`../../Img/Fitness/Editada/${imagem}`)} ></Image>
            <Text style = {styles.titulo} >{titulo}</Text>
            <Text style = {styles.textNota}>{nota}</Text>
            <Text style = {styles.textQuantidade}>{quantidade}</Text>
            <Text style = {styles.textPeso}>{peso}</Text>
            <Text style = {styles.textAvaliacao}>{avaliacao}</Text>
        </TouchableOpacity>
    )
}
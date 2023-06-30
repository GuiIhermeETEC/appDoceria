import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box: {
        marginTop:'-41%',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor:'#f7ead2',
        width:'85%',
        height:1550
      },
    text:{
      color:'purple',
      fontSize:'175%',
      marginTop:'5%',
      fontWeight:600
    },
       circleu:{
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#fe99bb',
        marginLeft:'-3%',
        marginRight:'3%'
       },
       imageBackground:{
        width:100,
        height:100,
       },
       circled:{
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#87f6fd',
        marginRight:'3%'
       },
       circlet:{
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#ffe65e',

       },
       categoria:{
        flexDirection:'row',
        width:'85%',
        height:'35%',
        marginTop:'5%',
       },
       line:{
        width:'85%',
        height:'0.3%',
        backgroundColor:'#ac267f'
       },
       linesi:{
        width:'85%',
        height:'0.3%',
        backgroundColor:'#d77bb8'
       },
       linedg:{
        width:'85%',
        height:'0.3%',
        backgroundColor:'#1fa3c8'
       },
       linedf:{
        width:'85%',
        height:'0.3%',
        backgroundColor:'#eed652'
       },
       legendacirculou:{
        flexDirection:'row',
        marginTop:'-123%',
        fontSize:18,
        marginRight:'62%',
        fontWeight:500
       },
       legendacirculod:{
        flexDirection:'row',
        marginTop:'-13.5%',
        fontSize:18,
        fontWeight:500
       },
       legendacirculot:{
        flexDirection:'row',
        marginTop:'-13.5%',
        fontSize:18,
        marginRight:'-62.5%',
        marginBottom:'8%',
        fontWeight:500
       },
       titulosi:{
        color:'#8B008B',
        fontSize:'130%',
        marginTop:'5%',
        marginRight:'5%', 
        fontWeight:'450'      
       },
       titulodg:{
        color:'#287d95',
        fontSize:'130%',
        marginTop:'5%',
        marginRight:'5%', 
        fontWeight:'495'      
       },
       titulodf:{
        color:'#df7300',
        fontSize:'135%',
        marginTop:'5%',
        marginRight:'10%', 
        fontWeight:'495'      
       },

       containerJogos:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight: 16,
        width: 140,
    },
    titulo: {
        color: "black",
        fontSize: 19,
        paddingTop: 8,
        textDecorationLine: 'underline',
        fontWeight:'500'
    },
    textNota: {
        fontSize: 19,
        color: "black",
        paddingLeft: 4,
        fontWeight:'500'
    },
    textQuantidade: {
      fontSize: 17,
      color: "black",
      paddingLeft: 4,
  },
  textPeso: {
    fontSize: 17,
    color: "black",
    paddingLeft: 4,
},
textAvaliacao: {
  fontSize: 17,
  color: "black",
  paddingLeft: 4,
},
    images: {
        width: "100%",
        height: 170,
        borderRadius: 8,
    },

    }
   
   
    //npx expo install expo-linear-gradient
   );

   export default styles;
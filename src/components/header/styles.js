import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    viewHeader:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'19%',
    },
    textHeader1:{
        fontSize:35,
        color:'#fdd3ef',
        fontWeight:700,
        textAlign: "center",
        marginTop:'-5%'
    },
    textHeader2:{
        fontSize:25,
        color:'#fdd3ef',
        marginBottom:'35%',
        fontWeight:500
    },
    line:{
        width:'40%',
        height:'1.8%',
        backgroundColor:'#fdd3ef',
        borderRadius: 100 / 2,
    },
    imageBackground:{
        flex: 1,
        width:420,
        height:450,
        resizeMode: 'cover',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles;
import React from 'react'
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';

  const style = StyleSheet.create({
    app:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginVertical: 20,
        position: 'relative',
      },
      i:{
        height: 9,
        width:9,
        backgroundColor:'#fff',
        position: 'absolute',
        borderRadius:4.5,
        top:13,
        left: 30.5,
        zIndex:1
      },
      linha:{
        position: 'absolute',
        bottom: 15,
        height: 1.2,
        width: 40,
        backgroundColor:'#fff',
        borderRadius:4,
      },
      appText:{
        color: '#b780c7',
        fontSize:40,
        fontFamily:'Poppins-Bold'
      },
      appText1:{
        color: '#fff',
        fontSize:40,
        fontFamily:'Poppins-Bold',
        transform: [{rotate:'180deg'}],
        paddingTop:4,
      },

  });
function Logo() {
    return (
        <View style={style.app}>
            <Text style={style.i}></Text>
            <Text style={style.appText}>Aitn</Text>
            <Text style={style.appText1}>e</Text>
            <View style={style.linha}/>
      </View>
    )
}

export default Logo

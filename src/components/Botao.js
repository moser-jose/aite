import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  const style = StyleSheet.create({
    botao: {
      marginTop: 30,
    },
    textBotao: {
      
        fontFamily:'Rubik-Bold',
      color: '#fff',
      fontSize: 20,
      marginLeft:10,
    },


  });
function Botao({Icon, background, title}) {
    return (
        <View  style={style.botao}>
            
            <TouchableOpacity style={{
            backgroundColor: background,
            elevation:1,
            height: 50,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: 4,
            flexDirection:'row',
            paddingHorizontal:10,
            }}>
          {
              Icon !== '' && <Icon height='22' width='22'/>
          }
          <Text style={style.textBotao}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default Botao

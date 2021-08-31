import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
const style = StyleSheet.create({
  background: {
    backgroundColor: '#315370',
    flex: 1,
    position: 'relative',
  },
  botton: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  versao: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  bottonApp: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  aitne: {
    color: '#b780c7',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    fontSize: 12,
  },
  bolinha1: {
    position: 'absolute',
    height: 300,
    width: 300,
    borderRadius: 150,
    backgroundColor: '#355675',
    top: 0,
    right: -170,
  },
  bolinha2: {
    position: 'absolute',
    height: 300,
    width: 300,
    borderRadius: 150,
    backgroundColor: '#355675',
    bottom: 0,
    left: -170,
  },
});

const Splash = () => {
  return (
    <SafeAreaView style={style.background}>
      <View style={style.bolinha1} />
      <View style={style.bolinha2} />
      <View style={style.botton}>
        <Text style={style.versao}> versão 1.0-rc </Text>
        <View style={style.bottonApp}>
          <Text style={style.aitne}>Aitne - </Text>
          <Text style={style.text}>todos os direitos reservados @2021</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

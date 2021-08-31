import React,{useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../components/Logo';
import Email from '../assets/img/user-email.svg';
import InputText from '../components/InputText';
import Botao from '../components/Botao';
const style = StyleSheet.create({
  background: {
    backgroundColor: '#315370',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 30,
    justifyContent:'center',
    alignItems:'center'
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

  campos: {},
  campos1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  registo:{
    flexDirection:'row'
  },
  registoText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
  },
  registoText1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#b780c7',
  },
  
  pergunta:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:50,
  },
  pergunta1:{
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#fff',
  },
  pergunta2:{
    color: '#b780c7',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  
});

const EsqueciSenha = () => {
  const navigation = useNavigation();
  const [inputEmail, setInputEmail] = useState('');

  return (
    <SafeAreaView style={style.background}>
      <View style={style.bolinha1} />
      <View style={style.bolinha2} />
      <Logo/>
      <View style={style.registo}>
        <Text style={style.registoText}>Recuperar a </Text>
        <Text style={style.registoText1}>Senha</Text>
      </View>
      <View style={style.campos}>
        <View style={style.campos1}>
          <InputText width="100%" value={inputEmail} placeholder="E-mail" Icon={Email} setValue={setInputEmail}/>
        </View>
        <Botao background="#B780c7" Icon="" title="Enviar"/>
        </View>
      <View style={style.pergunta}>
      <Text style={style.pergunta1}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={style.pergunta2}> Faça o Login</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default EsqueciSenha;

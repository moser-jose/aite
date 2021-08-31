import React,{useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../components/Logo';

import User from '../assets/img/user-input.svg';
import Email from '../assets/img/user-email.svg';
import Password from '../assets/img/user-password.svg';
import PasswordShow from '../assets/img/password-show.svg';
import PasswordHiden from '../assets/img/password-hiden.svg';
import InputDelete from '../assets/img/input-delete.svg';
import FacebookLogin from '../assets/img/facebook-login.svg';
import Senha from '../components/InputSenha'
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
  botton: {
    position: 'absolute',
    bottom: 20,
    justifyContent:'center',
    width: '100%',
  },
  versao: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign:'center',
    fontSize: 12,
    width: '100%',
  },
  bottonApp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%'
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
  
  
  Login: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    
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
  esqueci:{
    marginTop:20,
  },
  esqueciText:{
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
});

const Login = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [password, setPassword] = useState(true);

  const ActivePassword = () => {
    setPassword(!password);
    setShow(!show);
  };

  return (
    <SafeAreaView style={style.background}>
      <View style={style.bolinha1} />
      <View style={style.bolinha2} />
      <Logo/>
      <View style={style.registo}>
        <Text style={style.registoText}>Logi</Text>
        <Text style={style.registoText1}>n</Text>
      </View>
      <View style={style.campos}>
        
        <View style={style.campos1}>
          <InputText width="100%" value={inputEmail} placeholder="E-mail" Icon={Email} setValue={setInputEmail}/>
        </View>
        <View style={style.campos1}>
          <Senha
            ActivePassword={ActivePassword}
            Icon={Password}
            value={inputPassword}
            onChangeText={t => setInputPassword(t)}
            IconHiden={PasswordHiden}
            IconShow={PasswordShow}
            placeholder="Senha"
            show={show}/>
        </View>
        <View style={style.esqueci}>
          <TouchableOpacity onPress={()=>navigation.navigate('EsqueciSenha')}><Text style={style.esqueciText}>Esqueci a senha</Text></TouchableOpacity>
        </View>
        <Botao background="#B780c7" Icon="" title="Entrar"/>
        <Botao background="#4569b5" Icon={FacebookLogin} title="Entrar com o Facebook"/>
      </View>
      <View style={style.pergunta}>
      <Text style={style.pergunta1}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Registo')}><Text style={style.pergunta2}> Regista-se</Text></TouchableOpacity>
    </View>

      {/* <View style={style.botton}>
        <Text style={style.versao}>Versão 1.0-rc</Text>
        <View style={style.bottonApp}>
          <Text style={style.aitne}>Aitne - </Text>
          <Text style={style.text}>todos os direitos reservados @2021</Text>
        </View>
      </View> */}
    
    </SafeAreaView>
  );
};

export default Login;

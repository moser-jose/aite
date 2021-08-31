import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import User from '../assets/img/user-input.svg';
import Email from '../assets/img/user-email.svg';
import Password from '../assets/img/user-password.svg';
import PasswordShow from '../assets/img/password-show.svg';
import PasswordHiden from '../assets/img/password-hiden.svg';
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
  aitne: {
    color: '#b780c7',
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    
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
  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    flexDirection: 'row',
    width: '47%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 52,
    position: 'relative',
  },
  inputA: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 52,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  textInput: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    flex: 1,
    paddingLeft: 5,
  },
  botao: {
    marginTop: 50,
  },
  touch: {
    backgroundColor: '#B780c7',
    borderRadius: 4,
    elevation: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBotao: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 20,
  },
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
  registo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    
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
  left: {
    height: 26,
    width: 26,
  },
  meio: {
    flex: 1,
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
  }
});

const Registo = () => {
    const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [inputNome, setInputNome] = useState('');
  const [inputSobreNome, setInputSobreNome] = useState('');
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
      <View style={style.app}>
        <Text style={style.i}></Text>
        <Text style={style.appText}>Aitn</Text>
        <Text style={style.appText1}>e</Text>
        <View style={style.linha}/>
      </View>
      <View style={style.registo}>
        <Text style={style.registoText}>Regist</Text>
        <Text style={style.registoText1}>o</Text>
      </View>
      <View style={style.campos}>
        <View style={style.campos1}>
          <InputText width="47%" value={inputNome} placeholder="Nome" Icon={User} setValue={setInputNome}/>
          <InputText width="47%" value={inputSobreNome} placeholder="Sobre Nome" Icon={User} setValue={setInputSobreNome}/>
        </View>
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

        <Botao background="#B780c7" Icon="" title="Registar-se"/>
        <Botao background="#4569b5" Icon={FacebookLogin} title="Entrar com o Facebook"/>
      </View>

      {/* <View style={style.botton}>
        <Text style={style.versao}>Versão 1.0-rc</Text>
        <View style={style.bottonApp}>
          <Text style={style.aitne}>Aitne - </Text>
          <Text style={style.text}>todos os direitos reservados @2021</Text>
        </View>
      </View> */}
    <View style={style.pergunta}>
      <Text style={style.pergunta1}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={style.pergunta2}> Faça o Login</Text></TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Registo;

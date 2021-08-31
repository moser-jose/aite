import React,{ useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import InputDelete from '../assets/img/input-delete.svg';
const style = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    flexDirection: 'row',
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    position: 'relative',
  },
  textInput: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    flex: 1,
    paddingLeft: 5,
  },

});

function InputSenha({
  Icon,
  value,
  setValue,
  placeholder,
  width
}) {

  const [focus, setFocus]=useState(false);

  return (
    <View width={width} style={style.input}>
      <Icon width="24" height="24" />
      <TextInput
        style={style.textInput}
        placeholder={placeholder}
        value={value}
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        onChangeText={t=>setValue(t)}
      />
      {value !== '' && focus === true && 
        <TouchableOpacity onPress={() => setValue('')}>
        <InputDelete width="20" height="20" />
      </TouchableOpacity>
      }
    </View>
  );
}

export default InputSenha;

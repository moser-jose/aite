import React,{ useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const style = StyleSheet.create({
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

});

function InputSenha({
  Icon,
  IconShow,
  IconHiden,
  ActivePassword,
  value,
  placeholder,
  onChangeText,
  show,
}) {
  const [focus, setFocus]=useState(false);
  return (
    <View style={style.inputA}>
      <Icon width="26" height="26" />
      <TextInput
        style={style.textInput}
        placeholder={placeholder}
        secureTextEntry={show}
        value={value}
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        onChangeText={onChangeText}
      />
      {value !== '' && focus === true && (
        <TouchableOpacity onPress={ActivePassword}>
          {show === true ? (
            <IconShow width="26" height="26" />
          ) : (
            <IconHiden width="26" height="26" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

export default InputSenha;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registo from '../views/Registo';
import Login from '../views/Login';
import EsqueciSenha from '../views/EsqueciSenha';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Registo" component={Registo} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
  </Stack.Navigator>
);

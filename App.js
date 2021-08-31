import React, {useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
export default () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  
  return (
    <>
    {/* <StatusBar
        barStyle="default"
        hidden={true}
        backgroundColor="transparent"
        translucent={true}
      /> */}
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
      </>
  );
};

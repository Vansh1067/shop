import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux'

import Navigator from './navigation/Navigation'
import productReducer from './store/productReducer'

const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf')
  })
}

const rootReducer=combineReducers({
  product:productReducer
})

const store =createStore(rootReducer);





export default function App() {
  const [isLoading,setIsLoading]=useState(false);
  if(!isLoading){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>{setIsLoading(true)}}></AppLoading>
  }
  return <Provider store={store}><Navigator></Navigator></Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

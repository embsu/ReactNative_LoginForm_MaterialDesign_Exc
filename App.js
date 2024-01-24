
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Login from './screens/Login'
import {PaperProvider} from 'react-native-paper' // paperlibrary ui

export default function App() {
  return (
    <PaperProvider>
      <Login/>
    </PaperProvider>
  
  );
}



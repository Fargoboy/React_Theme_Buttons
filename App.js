import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {BackgroundProvider} from './components/BackGroundTheme';
import MainPage from './components/MainPage';

export default function App() {
  
  return (
    <BackgroundProvider>
      <View>
        <StatusBar style="auto" />
        <MainPage/>
      </View>
    </BackgroundProvider>
  );
}



import React, { useCallback } from 'react';
import Home from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { useFonts, Overpass_400Regular } from '@expo-google-fonts/overpass';
import * as SplashScreen from "expo-splash-screen"



export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    "OverpassRegular": Overpass_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}



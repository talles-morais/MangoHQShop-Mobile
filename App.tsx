import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { useFonts, Overpass_400Regular, Overpass_500Medium, Overpass_700Bold } from '@expo-google-fonts/overpass';
import Navigation from './src/routes/navigation';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    "OverpassRegular": Overpass_400Regular,
    "OverpassMedium": Overpass_500Medium,
    "OverpassBold": Overpass_700Bold,

  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
    </ThemeProvider>
  );
}



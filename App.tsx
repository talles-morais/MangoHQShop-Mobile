import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { CartProvider, useCart } from './src/hooks/cart';

import theme from './src/global/styles/theme';
import { 
  useFonts, 
  Overpass_400Regular, 
  Overpass_500Medium, 
  Overpass_700Bold, 
} from '@expo-google-fonts/overpass';
import {
 PasseroOne_400Regular
} from '@expo-google-fonts/passero-one'
import Navigation from './src/routes/navigation';
import { AuthProvider } from './src/hooks/auth';

interface UserProps {
  nome: string
  email: string
  telefone: string
  role: false,
  senha: string
  confirmPassword: string
  token: string,
}

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    "OverpassRegular": Overpass_400Regular,
    "OverpassMedium": Overpass_500Medium,
    "OverpassBold": Overpass_700Bold,
    "Passero": PasseroOne_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const initialUserState: UserProps = {
    nome: "",
    email: "",
    telefone: "",
    role: false, // Supondo que false indica um usuário comum, e true seria admin ou similar
    senha: "",
    confirmPassword: "",
    token: "", // Isso pode representar ausência de token
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <Navigation/> 
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}



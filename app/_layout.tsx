import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect,useState } from 'react';
import { useColorScheme } from 'react-native';
import { ActionsProvider,useActions } from '../hooks/actionsModule';

import {Nunito_400Regular} from '@expo-google-fonts/nunito';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter()
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    NunitoLight: require('../assets/fonts/NunitoSans_10pt-Light.ttf'),
    Nunito_400Regular,
    ...FontAwesome.font,
  });

    // const [user, setUser] = useState<User | null >()

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  
  useEffect(() => {
    if (loaded) {
      // if(user) router.push('/(tabs)')
      SplashScreen.hideAsync();

    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
  <ActionsProvider>
    <RootLayoutNav />
  </ActionsProvider>
  
  
  );
}

function RootLayoutNav() {
  const router = useRouter()
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="Auth" options={{ headerShown: false}} />
        <Stack.Screen name="wallet" options={{ headerShown: false }} />
        <Stack.Screen name="sendAsset" options={{ headerShown: false }} />
        <Stack.Screen name="allTransactions" options={{ headerShown: false}} />
        <Stack.Screen name="transferModal" options={{ headerShown: false }} />
        <Stack.Screen name="transactions" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}

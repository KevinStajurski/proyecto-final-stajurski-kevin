import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation/MainNavigator';
import { init } from './src/db'

init()
  .then(() => console.log('DB initialized'))
  .catch(err => console.log('DB failed', err.message))
export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    gap: 10
  },
});
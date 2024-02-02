import { StatusBar } from 'expo-status-bar';


import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import LoginScreen from './components/LoginScreen'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <LittleLemonHeader />
        {/*<LoginScreen /> */}
        <WelcomeScreen />
        {/*<MenuItems />*/}
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#495E57',
    backgroundColor: '#333333',
  },
  footer: {
    // backgroundColor: '#495E57',
    backgroundColor: '#333333',
  }
});

      
import { StatusBar } from 'expo-status-bar';


import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
// import WelcomeScreen from './components/WelcomeScreen';
// import MenuItems from './components/MenuItems';
import LoginScreen from './components/LoginScreen'
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <LittleLemonHeader />

        {/* <Drawer.Navigator
          useLegacyImplementation
          screenOptions={{ drawerPosition: 'right' }}
        >
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Menu" component={MenuItems} />
        </Drawer.Navigator> */}
{/* Tab.Navigator */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Welcome') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Menu') {
                iconName = 'ios-list';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Menu" component={MenuItems} />
        </Tab.Navigator>

{/* Stack.Navigator */}
        {/* <Stack.Navigator initialRouteName='Login'
        // screenOptions={{ headerStyle: { backgroundColor: '#FBDABB', } }}
        >
          
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          // options={{ title: 'Home' }}
           />
         
          <Stack.Screen name="Menu" component={MenuItems} />
        </Stack.Navigator> */}

        {/*<LoginScreen /> */}
        {/* <WelcomeScreen /> */}
        {/*<MenuItems />*/}
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
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

      
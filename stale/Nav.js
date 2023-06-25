import 'react-native-gesture-handler';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ScreenA from './src/screens/Expo-Fonts';
import ScreenB from './src/components/ScreenB';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator 
    //       screenOptions={{
    //         header: () => null
    //       }}>
    //     <Stack.Screen
    //       name="Screen_A"
    //       component={ScreenA}
    //     />
    //     <Stack.Screen
    //       name="Screen_B"
    //       component={ScreenB}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Drawer.Navigator
    //   screenOptions={({route}) => ({
    //     tabBarActiveTintColor: '#f0f',
    //     tabBarInactiveTintColor: '#555',
    //     activeBackgroundColor: '#fff',
    //     tabBarInactiveBackgroundColor: '#999',
    //     tabBarShowLabel: true,
    //     tabBarShowIcon: false,
    //     tabBarLabelStyle: {fontSize: 14},
    //     header: () => null,
    //     tabBarIcon: ({focused, size, color})=>{
    //       let iconName;
    //       if (route.name === 'Screen_A') {
    //         iconName = 'autoprefixer';
    //         size = focused ? 25 : 20;
    //       } else if (route.name === 'Screen_B') {
    //         iconName = 'btc';
    //         size = focused ? 25 : 20;
    //       } 
    //       return (
    //         <FontAwesome5 
    //           name={iconName}
    //           size={size}
    //           color={color}
    //         />
    //       )
    //     },
    //   })}
    //   activeColor='#f0e'
    //   inactiveColor='#3e2'
    //   barStyle={{backgroundColor: 'purple'}}
    //   >
    //     <Drawer.Screen
    //       name="Screen_A"
    //       component={ScreenA}
    //     />
    //     <Drawer.Screen
    //       name="Screen_B"
    //       component={ScreenB}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
   <NavigationContainer>
     <Drawer.Navigator
     screenOptions={{
      drawerPosition: 'left',
      drawerType: 'front', 
      swipeEdgeWidth: 200, 
      headerShown: true, 
      overlayColor: '#00000050', 
      drawerStyle: {
        backgroundColor: '#dee',
        width: 225,
      },
      swipeEnabled: true, 
    }}
     >
     <Drawer.Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          title: 'Screen A',
          drawerIcon: ({focused}) => (
            <FontAwesome5
            name='autoprefixer'
            size={focused ? 25 : 30}
            />
          )
        }}
        initialParams={{itemName: 'Item from Drawer', itemId: 'A'}}
     />
     <Drawer.Screen 
        name="ScreenB"
        options={{
          title: 'Screen B',
          drawerIcon: ({focused}) => (
            <FontAwesome5
            name='btc'
            size={focused ? 25 : 30}
            color={focused ? 'red' : 'blue'}
            />
          )
        }}
        component={ScreenB}
        initialParams={{itemName: 'Item from Drawer', itemId: 'B'}}
     />
    </Drawer.Navigator>
   </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
});

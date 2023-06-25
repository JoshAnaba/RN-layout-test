import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Login from './screens/Login';
import Home from './screens/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack = createDrawerNavigator();
// const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
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
     initialRouteName='Home'
     >
     <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
        initialParams={{itemName: 'Login', itemId: 'A'}}
     />
     <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
        initialParams={{itemName: 'Home', itemId: 'B'}}
     />
    </Stack.Navigator>
   </NavigationContainer>

  )
}
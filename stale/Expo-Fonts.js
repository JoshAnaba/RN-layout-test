import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import GlobalStyle from '../src/utils/GlobalStyle';
import { 
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold
} from '@expo-google-fonts/dancing-script';
export default function ScreenA ({navigation, route}) {
  const [fontsLoaded, error] = useFonts({
    Regular: DancingScript_400Regular,
    Medium: DancingScript_500Medium,
    SemiBold: DancingScript_600SemiBold,
    Bold: DancingScript_700Bold,
    'DancingScriptBold': require('../assets/fonts/DancingScript-Bold.ttf'),
    'DancingScriptSemiBold': require('../assets/fonts/DancingScript-SemiBold.ttf'),
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  const {itemId, itemName} = route.params
  const onPressHandler = () => {
    navigation.navigate('ScreenB', {itemName: 'Screen A', itemId: 'A'})
    // navigation.openDrawer()
  }
  return (
    <View style={styles.body}>
        <Text style={styles.text}>
          Screen A Test
        </Text>
        <Pressable onPress={onPressHandler} style={({pressed})=>({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
          <Text style={styles.text}>
            Toggle Drawer
          </Text>
        </Pressable>
        <Text style={styles.text}>
          Name: {itemName}
        </Text>
        <Text style={styles.text}>
          ID: {itemId}
        </Text>
    </View>
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
    fontFamily: 'SemiBold',
    margin: 10
  }
});

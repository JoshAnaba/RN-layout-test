import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Pressable } from 'react-native';
export default function Home ({navigation, route}) {
  const {itemName, itemId} = route.params
  const onPressHandler = () => {
    // navigation.goBack()
    // navigation.openDrawer()
    // navigation.setParams({itemId: 'AA'})
    navigation.navigate('Login')
  }
  return (
    <View style={styles.body}>
        <Text style={styles.text}>
          Screen B
        </Text>
        <Pressable onPress={onPressHandler} style={({pressed})=>({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
          <Text>
            Toggle Drawer
          </Text>
        </Pressable>
        <Text>Name: {itemName}</Text>
        <Text>ID: {itemId}</Text>
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
    margin: 10
  }
});

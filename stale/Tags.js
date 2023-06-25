import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Alert } from 'react-native';

export default function App() {
const [refreshing, setRefreshing] = useState(false)
const [name, setName] = useState('')
const [submitted, setSubmitted] = useState(false)
const [items, setItems] = useState(
  [
    {
      title: 'josh 0',
      data: [1,2,3,4,5]
    },
    {
      title: 'josh 1',
      data: [1,2,3,4,5]
    },
  ]
  )
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted)
    } else {
      Alert.alert('Warning', 'Length of name must be greater than 3', {
        text: 'OK'
      })
    }
  }
const onRefresh = () =>{
  setRefreshing(true)
  setTimeout(()=>{
    setItems([...items, {
      title: `josh ${items.length}`,
      data: [1,2,3,4,5]
    }])
    setRefreshing(false)
  }, 2000)
}
const DATA = [
  {
    title: '',
    data: [1,2,3,4,5]
  },
  {
    title: 'josh',
    data: [1,2,3,4,5]
  },
]
// SectionList: for rendering multiple dimension list
// FlatList: for rendering one dimension list
// ScrollView: 
// refreshControl
  return (
    <>
      <SafeAreaView />
      <View>
        <Text>Input your name</Text>
        <TextInput style={styles.input} onChangeText={(val)=>setName(val)} placeholder='Enter your name' secureTextEntry />
        {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} disabled={submitted} color='#00f'/> */}
        {/* <TouchableOpacity style={styles.button}  onPress={onPressHandler} activeOpacity={0.2}>
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </TouchableOpacity>
        <TouchableHighlight style={styles.button}  onPress={onPressHandler} activeOpacity={0.2}>
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback  onPress={onPressHandler} activeOpacity={0.2}>
          <View style={styles.button}>
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
          </View>
        </TouchableWithoutFeedback> */}
        <Pressable 
        onPress={onPressHandler} 
        style={({pressed})=>[
          {backgroundColor: pressed ? '#dddd' : '#00ff00'},
          styles.button
        ]}
        android_ripple={{color: '#00f'}}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        >
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </Pressable>
        {
          submitted 
          ? <Text> you are registered as:{name}</Text>
          : null
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10
  },
  item: {
    backgroundColor: 'blue',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  subItem: {
    backgroundColor: 'red',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  input: {
    height: 30,
    borderColor: '#000',
    borderWidth: 1
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  button: {
    backgroundColor : '#00ff00',
    width: 150,
    hright: 50,
    alignItems: 'center',
    margin: 10
  }
});

import { StyleSheet, Text, View, Pressable } from 'react-native';
export default function Login () {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Login
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0080ff'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
});

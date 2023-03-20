import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.topList}>
        {
          [1,2,3].map((e)=>{
          return (
          <View key={e} style={[styles.topListItem, styles.flexCenter, styles[`item${e}`], {flex: e}]}>
            <Text style={styles.textSize}>{e}</Text>
          </View>
          )
        })
        }
      </View>
      <View style={[styles.midList, styles.flexCenter]}>
        <View style={[{flex: 1, backgroundColor: 'orange', width: '100%'}, styles.flexCenter]}>
          <Text style={styles.textSize}>4</Text>
        </View>
        <View style={[{flex: 1,backgroundColor: 'green', width: '100%'}, styles.flexCenter]}>
          <Text style={styles.textSize}>5</Text>
        </View>
      </View>
      <View style={[styles.bottomList, styles.flexCenter]}>
        <View style={[styles.bottomListItem, styles.flexCenter, {backgroundColor: 'red'}]}>
          <Text style={styles.textSize}>6</Text>
        </View>
        <View style={[styles.bottomListItem, styles.flexCenter, {backgroundColor: 'blue'}]}>
          <Text style={styles.textSize}>7</Text>
        </View>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  textSize: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  topList: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topListItem: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    height: 100,
  },
  item1: {
    backgroundColor: 'red'
  },
  item2: {
    backgroundColor: 'green'
  },
  item3: {
    backgroundColor: 'indigo'
  },
  midList: {
    height: 100,
    flex: 1,
    display: 'flex',
  },
  bottomList: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  bottomListItem: {
    flex: 1,
    height: '100%'
  }
});

import { StyleSheet, View, SafeAreaView, Platform, StatusBar, Image, Text } from 'react-native';
import { MaterialCommunityIcons, Entypo } from 'react-native-vector-icons';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>my App </Text>
        <MaterialCommunityIcons name="ticket-percent" style={styles.icon1}></MaterialCommunityIcons>
        <Image source={require("./assets/kak.png")} style={styles.proimg} />

      </View>
      <View style={styles.view2}>
        <View style={styles.box1}>
          <Text style={styles.boxtxt}>товч ном</Text>
          <Entypo name="triangle-down"></Entypo>
        </View>
        <View style={styles.box2}>
          <Text style={styles.boxtxt}>цахим ном</Text>
          <Entypo name="triangle-left"></Entypo>
        </View>
        <View style={styles.box3}>
          <Text style={styles.boxtxt}>аудио ном</Text>
          <Entypo name="triangle-right"></Entypo>
        </View>
        <View style={styles.box4}>
          <Text style={styles.boxtxt}>подкаст </Text>
          <Entypo name="triangle-up"></Entypo>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text1: {
    fontSize: 30,
    fontWeight: "500",
    marginLeft: 10,
  },
  view1: {
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    marginLeft: 20,
    flexDirection: 'row',
  },
  icon1: {
    fontSize: 35,
    marginLeft: 170,
  },
  proimg: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  view2: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 150,
    height: 70,
    backgroundColor: "aqua",
    borderRadius: 20,
    margin: 10,
  },
  box2: {
    width: 150,
    height: 70,
    backgroundColor: "cadetblue",
    borderRadius: 20,
    margin: 10,
  },
  box3: {
    width: 150,
    height: 70,
    backgroundColor: "lime",
    borderRadius: 20,
    margin: 10,
  },
  box4: {
    width: 150,
    height: 70,
    backgroundColor: "darkslateblue",
    borderRadius: 20,
    margin: 10,
  },
  boxtxt: {
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  boxicons: {
    fontSize: 35, 
    color: "white", 

  }
});

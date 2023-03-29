import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
         Text, View,Image, Pressable, Button,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hahh!</Text>
      <Pressable
                onPress={()=> alert("onPress")}
                onLongPress={()=> alert("onLongPress")}>

      <Image source={require("./assets/favicon.png")}
             style={{width: 300, height:300}}/></Pressable>
      <TextInput
              placeholder="bicheerreeeeeee"/>
      <Button 
            title="click here"
            onPress={()=> alert("clicked")}/>


      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

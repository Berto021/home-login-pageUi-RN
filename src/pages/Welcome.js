import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

import * as Animatable from "react-native-animatable"
import { useNavigation } from "@react-navigation/native";

export const Welcome = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Animatable.Image
          animation="flipInY" 
          source={require("../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay={600}  animation='fadeInUp'style={styles.containerForm}>
        <Text style={styles.title}>Monitore, organize seus gastos em qualquer lugar!</Text>
        <Text style={styles.text}>Faça o Login para começar</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  imgContainer:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#38a69d'

},
containerForm:{
    flex:1,
    backgroundColor:'#FFF',
    borderTopLeftRadius:25,
    borderTopEndRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%'
},
title:{
    fontSize:24,
    fontWeight: 'bold',
    marginTop:28,
    marginBottom:12,
},
text:{
    color:'#a1a1a1'

},
button:{
    position:'absolute',
    backgroundColor:'#38a69d',
    borderRadius:50,
    paddingVertical:8,
    width:'60%',
    alignSelf:'center',
    bottom:'15%',
    alignItems:'center',
    justifyContent:'center'

},
buttonText:{
    fontSize:18,
    color:'#FFF',
    fontWeight:'bold'
}
});

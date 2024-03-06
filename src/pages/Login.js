import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import * as Animatable from "react-native-animatable";

export const Login = () => {
  return (
    <View style={style.container}>
      <Animatable.View
        style={style.containerHeader}
        animation={"fadeInLeft"}
        delay={500}
      >
        <Text style={style.msg}>Bem vindos</Text>
      </Animatable.View>
      <Animatable.View
        delay={500}
        animation="fadeInUp"
        style={style.formContainer}
      >
        <Text style={style.title}>Email</Text>
        <TextInput placeholder="Digite um email" style={style.input} />

        <Text style={style.title}>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={style.input} />

        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonRegister}>
          <Text style={style.buttonTextRegister}>Não possui uma conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};
const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#38a69d" },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  msg: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  formContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingEnd: "5%",
    paddingStart: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#38a69d",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 4,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: { marginTop: 14, alignSelf: "center" },
  buttonTextRegister:{ color:'#a1a1a1'}
});

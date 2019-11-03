import React from "react";
import { Alert, KeyboardAvoidingView, Text, TextInput } from "react-native";
import { Block, Button, Input, } from "galio-framework";
import { Header } from "../../components";


const RegisterWaiterScreen = (props) => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const save = () => {
    console.log("name", name);
    console.log("username", username);
    console.log("password", password);

    return fetch(
      "https://kcyst4l620.execute-api.us-east-1.amazonaws.com/dev/waiter/create",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          username: username,
          password: password,
        }),
      }).then((res) => {
      Alert.alert("Garçom cadastrado com sucesso!");
      console.log(res);
    }).catch((err) => {
      Alert.alert("Erro ao cadastrar o Garçom");
      console.log(err);
    });
  };


  return (
    <Block flex>
      <Header title="Cadastra Garçom"/>
      <KeyboardAvoidingView behavior="height" enabled>
        <Text>Nome</Text>
        <Input
          value={name}
          onChangeText={setName}
        />
        <Text>Usuário</Text>
        <Input
          value={username}
          onChangeText={setUsername}
        />
        <Text>Senha</Text>
        <Input
          value={password}
          onChangeText={setPassword}
        />

        <Button
          center
          onPress={() => {
            save();
          }}
        >
          Salvar
        </Button>
      </KeyboardAvoidingView>
    </Block>
  );
};


export default RegisterWaiterScreen;

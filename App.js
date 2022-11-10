import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "./src/Header";
import List from "./src/List";

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: "1",
      nome: "Caio Ribas ",
      descricao: "Mais um dia de muitos bugs",
      // imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      imgperfil: require("./src/img/teste3.png"),
      imgpublicacao: "https://sujeitoprogramador.com/instareact/foto1.png",
      // imgpublicacao: require("./src/img/feed1.png"),
      likeada: true,
      likers: 45,
    },
    {
      id: "2",
      nome: "Matheus Fraga",
      descricao: "isso sim é ser raiz!!!",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgpublicacao: "https://sujeitoprogramador.com/instareact/foto2.png",
      likeada: false,
      likers: 0,
    },
    {
      id: "3",
      nome: "Jose Coutinho",
      descricao:
        "Bora trabalhar!Hoje estou começando em um novo projeto aqui na Sujeito programador",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
      imgpublicacao: "https://sujeitoprogramador.com/instareact/foto3.png",
      likeada: false,
      likers: 3,
    },
    {
      id: "4",
      nome: "Cleiton Camargo",
      descricao: "Isso sim é TI!!",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgpublicacao: "https://sujeitoprogramador.com/instareact/foto4.png",
      likeada: false,
      likers: 1,
    },
    {
      id: "5",
      nome: "Guilhermo Henrique",
      descricao: "Boa tarde turma do insta!! kkkk",
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
      imgpublicacao: "https://sujeitoprogramador.com/instareact/foto5.png",
      likeada: false,
      likers: 32,
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={feed}
        renderItem={({ item }) => <List data={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

// id:
// nome:
// descricao:
// imgperfil:
// imgpublicacao:
// likeada:
// likers:

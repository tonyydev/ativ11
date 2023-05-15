import React, { useState } from "react"
import { FlatList, StyleSheet, View, Text } from "react-native";
import Cabecalho from "./src/componentes/cabecalhos";
import NovosItens from "./src/componentes/novosItens";

export default function App() {

  const [lista, setLista] = useState([
    { texto: "comprar café", key: '1' },
    { texto: "criar um app", key: '2' },
    { texto: "jogar video game", key: '3' },
  ]);

  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key != key);
      }
    )
  }

  return (

    <View style={styles.container}>

      <Cabecalho />

      <View style={styles.conteudo}>

          <View style={styles.estiloLista}>

            <FlatList
              data={lista}
              renderItem={({ item}) => (
                <NovosItens props={item} funcao={apertarItem} />
              )}
            />

          </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
  },
  conteudo:{
    padding: 40,
  },
});
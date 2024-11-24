import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import CarImages from "./components/CarImages";
import CarForm from "./components/CarForm";

export default function App() {
  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Carros</Text>
      <CarImages />
      <CarForm onAddCar={addCar} />
      <Text style={styles.listTitle}>Lista de Carros Cadastrados:</Text>
      <FlatList
        data={cars}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            Modelo: {item.model}, Marca: {item.brand}, Ano: {item.year}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 40,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  listItem: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
});

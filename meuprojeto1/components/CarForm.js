import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function CarForm({ onAddCar }) {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");

  const handleRegister = () => {
    if (model && brand && year) {
      onAddCar({ model, brand, year });
      Alert.alert(
        "Cadastro realizado!",
        `Modelo: ${model}\nMarca: ${brand}\nAno: ${year}`
      );
      setModel("");
      setBrand("");
      setYear("");
    } else {
      Alert.alert("Preencha todos os campos!");
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Modelo do carro"
        value={model}
        onChangeText={setModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={brand}
        onChangeText={setBrand}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <Button title="Cadastrar Carro" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
});

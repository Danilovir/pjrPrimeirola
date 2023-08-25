import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FaBeer } from 'react-icons/fa';
import { VscBell } from "react-icons/ai";
import {Img} from 'react-image'

const myComponent = () => <Img src="https://www.example.com/foo.jpg" />


const App = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    
  
  });
  const [sum, setSum] = useState(0);

  const handleInputChange = (inputName, value) => {
    setInputValues({ ...inputValues, [inputName]: value });
  };

  const handleSum = () => {
    const { input1, input2, input3, input4, input5 } = inputValues;
    const result = parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5);
    setSum(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Input 12:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input1', value)}
        value={inputValues.input1}
        keyboardType="numeric"
      />


<Text style={styles.label}>Input 2:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input2', value)}
        value={inputValues.input2}
        keyboardType="numeric"
      />

<Text style={styles.label}>Input 3:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input3', value)}
        value={inputValues.input3}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Input 4:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input4', value)}
        value={inputValues.input4}
        keyboardType="numeric"
      />

<Text style={styles.label}>Input 5:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input5', value)}
        value={inputValues.input5}
        keyboardType="numeric"
      />

      

      <Button title="Somar" onPress={handleSum} />

      <Text style={styles.result}>Resultado: {sum}</Text>

      <img src="data:image/jpeg;base64,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"></img>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
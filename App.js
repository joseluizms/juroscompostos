import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    // Fórmula de juros compostos: A = P(1 + r/n)^(nt)
    // A = valor futuro
    // P = valor principal
    // r = taxa de juros anual (em decimal)
    // n = número de vezes que o juro é aplicado por período
    // t = tempo em anos

    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = 1; // Juros compostos anualmente

    if (isNaN(P) || isNaN(r) || isNaN(t)) {
      setResult('Por favor, insira valores válidos.');
      return;
    }

    const A = P * Math.pow(1 + r / n, n * t);
    setResult(`O valor futuro é ${A.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Juros Compostos</Text>
      <TextInput
        style={styles.input}
        placeholder="Principal"
        keyboardType="numeric"
        onChangeText={text => setPrincipal(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de juros (%)"
        keyboardType="numeric"
        onChangeText={text => setRate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tempo (anos)"
        keyboardType="numeric"
        onChangeText={text => setTime(text)}
      />
      <Button title="Calcular" onPress={calculateCompoundInterest} />
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

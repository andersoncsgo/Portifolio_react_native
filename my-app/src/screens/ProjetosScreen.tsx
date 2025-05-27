import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProjetosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <Text style={styles.cardTitle}>API de Pagamentos</Text>
      <Text style={styles.text}>Python, Flask, WebSocket</Text>

      <Text style={styles.cardTitle}>Chat em tempo real</Text>
      <Text style={styles.text}>React, Vite, Flask, WebSocket</Text>

      <Text style={styles.cardTitle}>App de Hábitos</Text>
      <Text style={styles.text}>Flutter, Dart</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    color: '#3B82F6',
    marginTop: 16,
  },
  text: {
    color: '#E2E8F0',
  },
});

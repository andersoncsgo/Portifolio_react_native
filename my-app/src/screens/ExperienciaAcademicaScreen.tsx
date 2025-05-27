import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExperienciaAcademicaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>

      <Text style={styles.cardTitle}>UNICAP - Sistemas Para Internet</Text>
      <Text style={styles.text}>2023 - 2026</Text>

      <Text style={styles.cardTitle}>ETE Iputinga - Redes de Computadores</Text>
      <Text style={styles.text}>2019 - 2021</Text>
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

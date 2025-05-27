import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExperienciaProfissionalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <Text style={styles.cardTitle}>Level Group - Estágio em Dados</Text>
      <Text style={styles.text}>Out 2024 – Jan 2025</Text>
      <Text style={styles.text}>
        - Dashboards no Power BI{'\n'}
        - Análise e tratamento de dados{'\n'}
        - Indicadores de desempenho
      </Text>

      <Text style={styles.cardTitle}>Porto Digital - Residência Onboard</Text>
      <Text style={styles.text}>Mar 2024 – Jul 2024</Text>
      <Text style={styles.text}>
        - Gestão de projetos{'\n'}
        - Trabalho em equipe{'\n'}
        - Apresentações
      </Text>

      <Text style={styles.cardTitle}>Porto Digital - Bolsa</Text>
      <Text style={styles.text}>Out 2023 – Dez 2023</Text>
      <Text style={styles.text}>
        - Aperfeiçoamento em programação (Java){'\n'}
        - Organização de projetos{'\n'}
        - Participação em palestras
      </Text>
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

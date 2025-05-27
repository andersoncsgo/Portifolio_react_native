import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>

      <Text style={styles.text}>
        Este aplicativo foi desenvolvido utilizando tecnologias modernas para desenvolvimento mobile com React Native.
      </Text>

      <Text style={styles.subTitle}>Tecnologias e Ferramentas:</Text>
      <Text style={styles.text}>
        • React Native{'\n'}
        • Expo (Gerenciamento do projeto e build){'\n'}
        • React Navigation (Navegação entre telas){'\n'}
        • TypeScript (Tipagem estática){'\n'}
        • Expo Router (opcional se você usar no futuro){'\n'}
        • Styled Manualmente (via StyleSheet do React Native){'\n'}
        • Hooks (Gerenciamento de estado local){'\n'}
        • FlatList, ScrollView e outros componentes nativos{'\n'}
      </Text>

      <Text style={styles.subTitle}>Funcionalidades do App:</Text>
      <Text style={styles.text}>
        • Tela inicial com foto e navegação para outras páginas{'\n'}
        • Telas de Experiência Acadêmica, Profissional e Projetos{'\n'}
        • Tela Sobre com detalhes técnicos do app{'\n'}
        • Implementação do jogo "Senha" (Bulls and Cows) com regras completas{'\n'}
        • Design simples, responsivo e adaptado para diferentes dispositivos
      </Text>

      <Text style={styles.subTitle}>Versões e Dependências:</Text>
      <Text style={styles.text}>
        • React Native: {require('react-native/package.json').version}{'\n'}
        • Expo: {require('expo/package.json').version}{'\n'}
        • @react-navigation/native: {require('@react-navigation/native/package.json').version}{'\n'}
        • react-native-screens, react-native-safe-area-context, react-native-gesture-handler, react-native-reanimated
      </Text>

      <Text style={styles.footer}>
        App desenvolvido por Anderson Lucas 💙
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
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    color: '#3B82F6',
    marginTop: 16,
    marginBottom: 6,
  },
  text: {
    color: '#E2E8F0',
    lineHeight: 22,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: '#94A3B8',
  },
});

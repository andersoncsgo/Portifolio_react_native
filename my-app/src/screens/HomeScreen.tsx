import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/anderson_foto.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Anderson Lucas</Text>
      <Text style={styles.subtitle}>Desenvolvedor de Software</Text>

      <View style={styles.buttons}>
        <Button title="Sobre" onPress={() => navigation.navigate('Sobre')} />
        <Button title="Experiência Acadêmica" onPress={() => navigation.navigate('ExperienciaAcademica')} />
        <Button title="Experiência Profissional" onPress={() => navigation.navigate('ExperienciaProfissional')} />
        <Button title="Projetos" onPress={() => navigation.navigate('Projetos')} />
        <Button title="Jogo da Senha" onPress={() => navigation.navigate('Jogo')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#3B82F6',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    marginBottom: 24,
  },
  buttons: {
    gap: 10,
    width: '100%',
  },
});

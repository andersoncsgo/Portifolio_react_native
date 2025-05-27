import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SobreScreen from '../screens/SobreScreen';
import ExperienciaAcademicaScreen from '../screens/ExperienciaAcademicaScreen';
import ExperienciaProfissionalScreen from '../screens/ExperienciaProfissionalScreen';
import ProjetosScreen from '../screens/ProjetosScreen';
import JogoScreen from '../screens/JogoScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0F172A' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
        <Stack.Screen name="ExperienciaAcademica" component={ExperienciaAcademicaScreen} options={{ title: 'Experiência Acadêmica' }} />
        <Stack.Screen name="ExperienciaProfissional" component={ExperienciaProfissionalScreen} options={{ title: 'Experiência Profissional' }} />
        <Stack.Screen name="Projetos" component={ProjetosScreen} />
        <Stack.Screen name="Jogo" component={JogoScreen} options={{ title: 'Jogo da Senha' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

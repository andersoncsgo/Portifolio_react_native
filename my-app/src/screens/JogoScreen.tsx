import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';

export default function JogoScreen() {
  const [senha, setSenha] = useState('');
  const [palpite, setPalpite] = useState('');
  const [tentativas, setTentativas] = useState<{ palpite: string; resultado: string }[]>([]);
  const [jogoAtivo, setJogoAtivo] = useState(true);

  // Gera uma senha aleatória com 4 dígitos únicos
  const gerarSenha = () => {
    const digitos: string[] = [];
    while (digitos.length < 4) {
      const random = Math.floor(Math.random() * 10).toString();
      if (!digitos.includes(random)) {
        digitos.push(random);
      }
    }
    return digitos.join('');
  };

  // Inicia o jogo
  const iniciarJogo = () => {
    const novaSenha = gerarSenha();
    setSenha(novaSenha);
    setTentativas([]);
    setPalpite('');
    setJogoAtivo(true);
    console.log('Senha gerada:', novaSenha);
  };

  useEffect(() => {
    iniciarJogo();
  }, []);

  // Verifica o palpite
  const verificarPalpite = () => {
    if (palpite.length !== 4 || new Set(palpite).size !== 4) {
      Alert.alert('Palpite inválido', 'Digite 4 dígitos diferentes.');
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (palpite[i] === senha[i]) {
        bulls++;
      } else if (senha.includes(palpite[i])) {
        cows++;
      }
    }

    const resultado = `${bulls} Bulls | ${cows} Cows`;
    const novaTentativa = { palpite, resultado };

    const novasTentativas = [novaTentativa, ...tentativas];
    setTentativas(novasTentativas);
    setPalpite('');

    if (bulls === 4) {
      Alert.alert('🎉 Você venceu!', `A senha era ${senha}`);
      setJogoAtivo(false);
    } else if (novasTentativas.length >= 10) {
      Alert.alert('😥 Fim de jogo', `A senha era ${senha}`);
      setJogoAtivo(false);
    }
  };

  const mostrarSenha = () => {
    Alert.alert('🔐 Senha', `A senha é ${senha}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Senha</Text>

      {jogoAtivo ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Digite 4 dígitos"
            keyboardType="numeric"
            maxLength={4}
            value={palpite}
            onChangeText={setPalpite}
          />

          <Button title="Verificar" onPress={verificarPalpite} />
        </>
      ) : (
        <Button title="Jogar Novamente" onPress={iniciarJogo} />
      )}

      <View style={styles.botaoSenha}>
        <Button title="Mostrar Senha" onPress={mostrarSenha} />
      </View>

      <Text style={styles.subTitle}>Tentativas:</Text>
      <FlatList
        data={tentativas}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tentativa}>
            <Text style={styles.tentativaTexto}>
              {item.palpite} → {item.resultado}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.text}>Nenhuma tentativa ainda.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    color: '#3B82F6',
    marginTop: 20,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 18,
  },
  botaoSenha: {
    marginTop: 10,
  },
  tentativa: {
    backgroundColor: '#1E293B',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  tentativaTexto: {
    color: '#E2E8F0',
    fontSize: 16,
  },
  text: {
    color: '#E2E8F0',
    textAlign: 'center',
    marginTop: 10,
  },
});

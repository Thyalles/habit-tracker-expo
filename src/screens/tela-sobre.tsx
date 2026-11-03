import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function TelaSobre() {
  const router = useRouter();

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Rastreador de Micro-hábitos</Text>
      <Text style={estilos.subtitulo}>
        Versão: Aula 8 (Hooks, Zustand e Persistência Local)
      </Text>

      <Text style={estilos.descricao}>
        Acompanhe seus hábitos diários com estado global compartilhado via Zustand e persistência em disco com AsyncStorage e SQLite.
      </Text>

      <Pressable onPress={() => router.back()} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}

export default TelaSobre;

const estilos = StyleSheet.create({
  tela: { flex: 1, padding: 24, gap: 16, justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#333' },
  subtitulo: { fontSize: 16, color: '#666' },
  descricao: { fontSize: 14, color: '#666', lineHeight: 20 },
  botao: {
    backgroundColor: '#f26522',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
});

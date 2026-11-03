// Atividade 1 — Tela Sobre
// Onde: src/app/sobre.tsx

import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TelaSobre() {
  const router = useRouter();

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Rastreador de Micro-hábitos</Text>
      <Text style={estilos.subtitulo}>Versão: Aula 6 (Navegação & Fotos)</Text>

      <Text style={estilos.limitacao}>
        A foto registrada não volta para a lista de hábitos — levar dados entre telas será
        implementado na próxima aula.
      </Text>

      <Pressable onPress={() => router.back()} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, padding: 24, gap: 16, justifyContent: 'center' },
  titulo: { fontSize: 28, fontWeight: '700', textAlign: 'center' },
  subtitulo: { fontSize: 18, textAlign: 'center' },
  limitacao: { fontSize: 16, color: '#666', textAlign: 'center', lineHeight: 24 },
  texto: { fontSize: 16 },
  botao: { backgroundColor: '#f26522', paddingVertical: 14, borderRadius: 10, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
});

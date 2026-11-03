import { StyleSheet, Text, View } from 'react-native';

export function TelaEstatisticas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estatísticas</Text>
      <Text style={styles.texto}>Acompanhe o progresso dos seus hábitos aqui.</Text>
    </View>
  );
}

export default TelaEstatisticas;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 8, padding: 24 },
  titulo: { fontSize: 20, fontWeight: '700' },
  texto: { fontSize: 16, color: '#555' },
});

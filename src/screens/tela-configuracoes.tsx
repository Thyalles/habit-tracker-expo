import { StyleSheet, Text, View } from 'react-native';

export function TelaConfiguracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <Text style={styles.texto}>Gerencie preferências e lembretes de hábitos.</Text>
    </View>
  );
}

export default TelaConfiguracoes;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 8, padding: 24 },
  titulo: { fontSize: 20, fontWeight: '700' },
  texto: { fontSize: 16, color: '#555', textAlign: 'center' },
});

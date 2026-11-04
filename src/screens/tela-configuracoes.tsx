// Exercício 3 — useContext: Tema Claro/Escuro em todo o app
// Onde: src/screens/tela-configuracoes.tsx (rota: src/app/settings.tsx)

import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../context/theme-context';

export function TelaConfiguracoes() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <Text style={[styles.titulo, isDark && styles.textDark]}>Configurações</Text>
      <Text style={[styles.texto, isDark && styles.textDark]}>
        Gerencie preferências e o tema do aplicativo.
      </Text>

      <View style={[styles.linhaTema, isDark && styles.linhaTemaDark]}>
        <Text style={[styles.rotulo, isDark && styles.textDark]}>Modo Escuro</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

export default TelaConfiguracoes;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, padding: 24, backgroundColor: '#f5f5f5' },
  containerDark: { backgroundColor: '#111827' },
  titulo: { fontSize: 20, fontWeight: '700', color: '#111827' },
  texto: { fontSize: 16, color: '#555', textAlign: 'center' },
  textDark: { color: '#f5f5f5' },
  linhaTema: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  linhaTemaDark: {
    borderColor: '#374151',
    backgroundColor: '#1f2937',
  },
  rotulo: { fontSize: 16, fontWeight: '600', color: '#111827' },
});

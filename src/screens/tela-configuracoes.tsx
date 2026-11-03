// Exercício 3 — useContext: Tema Claro/Escuro em todo o app
// Onde: src/screens/tela-configuracoes.tsx (rota: src/app/settings.tsx)

import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../context/theme-context';

export function TelaConfiguracoes() {
  // TODO Ex 3.5: Consumir { isDark, toggleTheme } de useTheme()
  const { isDark, toggleTheme } = useTheme();
  void isDark;
  void toggleTheme;

  return (
    // TODO Ex 3.6: Alterar backgroundColor e cor do texto conforme isDark e ligar o <Switch> a isDark e toggleTheme
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <Text style={styles.texto}>Gerencie preferências e o tema do aplicativo.</Text>

      <View style={styles.linhaTema}>
        <Text style={styles.rotulo}>Modo Escuro</Text>
        <Switch value={false} onValueChange={() => {}} />
      </View>
    </View>
  );
}

export default TelaConfiguracoes;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, padding: 24 },
  titulo: { fontSize: 20, fontWeight: '700' },
  texto: { fontSize: 16, color: '#555', textAlign: 'center' },
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
  },
  rotulo: { fontSize: 16, fontWeight: '600' },
});

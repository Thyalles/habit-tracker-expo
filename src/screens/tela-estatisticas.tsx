// Exercício 4 (Tarefa 3) & Atividade Aplicada (Requisito 4) — Aba Estatísticas com Zustand e useTheme
// Onde: src/screens/tela-estatisticas.tsx (rota: src/app/(tabs)/stats.tsx)

import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../context/theme-context';
import { useHabitStore } from '../store/use-habit-store';

export function TelaEstatisticas() {
  // TODO Ex 4.4: Consumir 'habits' via seletor useHabitStore((state) => state.habits)
  const habits = useHabitStore((state) => state.habits);
  const { isDark, toggleTheme } = useTheme();
  void habits;
  void isDark;
  void toggleTheme;

  // TODO Ex 4.5 / Atividade Aplicada 4.1: Calcular total de hábitos, concluídos, pendentes e porcentagem de conclusão
  const total = 0;
  const completed = 0;
  const pending = 0;
  const percentage = 0;

  return (
    // TODO Atividade Aplicada 4.2: Aplicar cores de tema (isDark) e conectar o Switch ao toggleTheme
    <View style={styles.container}>
      <Text style={styles.titulo}>Estatísticas</Text>
      <Text style={styles.texto}>Total de hábitos: {total}</Text>
      <Text style={styles.texto}>Concluídos: {completed}</Text>
      <Text style={styles.texto}>Pendentes: {pending}</Text>
      <Text style={styles.destaque}>Progresso: {percentage}%</Text>

      <View style={styles.linhaTema}>
        <Text style={styles.texto}>Modo Escuro</Text>
        <Switch value={false} onValueChange={() => {}} />
      </View>
    </View>
  );
}

export default TelaEstatisticas;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, padding: 24 },
  titulo: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  texto: { fontSize: 16, color: '#555' },
  destaque: { fontSize: 18, fontWeight: '700', color: '#FF6002', marginTop: 4 },
  linhaTema: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

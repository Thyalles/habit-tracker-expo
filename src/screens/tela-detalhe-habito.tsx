// Atividade Aplicada (Requisito 5) — Tela de Detalhe do Hábito + Cronômetro de Foco
// Onde: src/screens/tela-detalhe-habito.tsx (rota: src/app/habit/[id].tsx)

import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FocusTimer from '../components/focus-timer';
import { useTheme } from '../context/theme-context';
import { listFocusSessions, saveFocusSession } from '../services/focus-db';
import { useHabitStore } from '../store/use-habit-store';

export function TelaDetalheHabito() {
  // ⚠️ Regra dos Hooks: declare TODOS os hooks no topo, antes de qualquer return condicional!
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isDark } = useTheme();

  // TODO Atividade Aplicada 5.1: Buscar o hábito pelo id na useHabitStore com seletor
  // Ex: const habit = useHabitStore((s) => s.habits.find((h) => h.id === id));
  const habit = useHabitStore((s) => s.habits.find((h) => h.id === id));
  const toggleHabit = useHabitStore((s) => s.toggleHabit);
  const removeHabit = useHabitStore((s) => s.removeHabit);

  void isDark;
  void toggleHabit;
  void removeHabit;
  void saveFocusSession;
  void listFocusSessions;

  // TODO Atividade Aplicada 5.2: Se !habit, exibir mensagem "Hábito não encontrado" e botão para voltar

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{habit ? habit.title : 'Detalhes do hábito'}</Text>
      <Text style={styles.id}>Hábito ID: {id}</Text>
      <Text style={styles.status}>
        Status: {habit?.done ? '✅ Concluído' : '⬜ Pendente'}
      </Text>

      {/* Cronômetro de foco (Exercício 2) */}
      <FocusTimer />

      <View style={styles.acoes}>
        {/* TODO Atividade Aplicada 5.3: Chamar toggleHabit(id) ao pressionar */}
        <Pressable onPress={() => {}} style={styles.botao}>
          <Text style={styles.textoBotao}>
            {habit?.done ? 'Marcar como pendente' : 'Concluir hábito'}
          </Text>
        </Pressable>

        {/* TODO Atividade Aplicada 5.4: Chamar removeHabit(id) e voltar com router.back() */}
        <Pressable onPress={() => {}} style={[styles.botao, styles.botaoExcluir]}>
          <Text style={styles.textoBotao}>Excluir hábito</Text>
        </Pressable>

        <Pressable onPress={() => router.back()} style={[styles.botao, styles.botaoVoltar]}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default TelaDetalheHabito;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12, padding: 24 },
  titulo: { fontSize: 22, fontWeight: '700', textAlign: 'center' },
  id: { fontSize: 16, color: '#FF6002', fontWeight: '600' },
  status: { fontSize: 16, color: '#555', marginBottom: 8 },
  acoes: { width: '100%', gap: 10, marginTop: 16 },
  botao: {
    backgroundColor: '#FF6002',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoExcluir: { backgroundColor: '#c62828' },
  botaoVoltar: { backgroundColor: '#555' },
  textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
});

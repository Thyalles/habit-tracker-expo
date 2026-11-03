// Exercício 2 — useEffect: cronômetro de foco com cleanup
// Onde: src/components/focus-timer.tsx

import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function FocusTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // TODO Ex 2.1: Se não estiver rodando (!isRunning), sair cedo
    // TODO Ex 2.2: Criar setInterval de 1000ms incrementando 'seconds' com prev => prev + 1
    // TODO Ex 2.3: Retornar função de cleanup com clearInterval(intervalId)
  }, [/* TODO Ex 2.4: Dependências */]);

  return (
    <View style={styles.box}>
      <Text style={styles.timer}>{seconds}s</Text>
      <View style={styles.actions}>
        <Pressable
          style={styles.button}
          onPress={() => setIsRunning((prev) => !prev)}
        >
          <Text style={styles.buttonText}>{isRunning ? 'Pausar' : 'Iniciar Foco'}</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.resetButton]}
          onPress={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          <Text style={styles.buttonText}>Zerar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 20, alignItems: 'center', borderRadius: 12, backgroundColor: '#F3E9DC' },
  timer: { fontSize: 36, fontWeight: 'bold', marginBottom: 16 },
  actions: { flexDirection: 'row', gap: 12 },
  button: { backgroundColor: '#FF6002', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  resetButton: { backgroundColor: '#555' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

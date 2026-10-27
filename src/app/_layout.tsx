// Atividades 1 e 2 — Layout Raiz
// Onde: src/app/_layout.tsx

import { Stack } from 'expo-router';

export default function LayoutRaiz() {
  return (
    <Stack screenOptions={{ headerTintColor: '#f26522' }}>
      <Stack.Screen name="index" options={{ title: 'Meus hábitos' }} />
      <Stack.Screen
        name="registrar-foto"
        options={{ title: 'Foto do hábito', headerBackTitle: 'Hábitos' }}
      />
      <Stack.Screen name="sobre" options={{ title: 'Sobre o app' }} />
      <Stack.Screen name="galeria" options={{ title: 'Galeria do hábito' }} />
    </Stack>
  );
}

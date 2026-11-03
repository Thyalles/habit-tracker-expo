// Atividades 1 e 2 — Layout Raiz
// Onde: src/app/_layout.tsx

import { Stack } from 'expo-router';

export default function LayoutRaiz() {
  return (
    <Stack screenOptions={{ headerTintColor: '#f26522' }}>
      <Stack.Screen name="index" options={{ title: 'Meus hábitos' }} />
      {/* TODO A1: declare o Stack.Screen para 'registrar-foto' (título: 'Foto do hábito', headerBackTitle: 'Hábitos') */}
      <Stack.Screen name="registrar-foto" options={{ title: 'Foto do hábito', headerBackTitle: 'Hábitos' }} />
      {/* TODO A1: declare o Stack.Screen para 'sobre' (título: 'Sobre o app') */}
      <Stack.Screen name="sobre" options={{ title: 'Sobre o app' }} />
      {/* TODO A2: declare o Stack.Screen para 'galeria' (título: 'Galeria do hábito') */}
      <Stack.Screen name="galeria" options={{ title: 'Galeria do hábito' }} />
    </Stack>
  );
}

// Exercício 4 — zustand: Store global de hábitos com seletores
// Exercício 5 (Parte A) & Atividade Aplicada (Requisito 2) — Persistência com middleware persist + AsyncStorage
// Onde: src/store/use-habit-store.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Habit = {
  id: string;
  title: string;
  done: boolean;
};

type HabitStore = {
  habits: Habit[];
  addHabit: (title: string) => void;
  toggleHabit: (id: string) => void;
  removeHabit: (id: string) => void;
};

// TODO Ex 5.1: Envolver a store com create<HabitStore>()(persist(..., { name: '@habits:store', storage: createJSONStorage(() => AsyncStorage) }))
void AsyncStorage;
void createJSONStorage;
void persist;

export const useHabitStore = create<HabitStore>((set) => ({
  habits: [
    { id: '1', title: 'Beber 2L de água', done: false },
    { id: '2', title: 'Ler 15 páginas', done: true },
  ],
  addHabit: (title) => {
    // TODO Ex 4.1: Implementar adição imutável de hábito com set((state) => ({ ... }))
    void set;
    void title;
  },
  toggleHabit: (id) => {
    // TODO Ex 4.2: Implementar inversão de 'done' com .map() usando set((state) => ({ ... }))
    void set;
    void id;
  },
  removeHabit: (id) => {
    // TODO Ex 4.3: Implementar remoção com .filter() usando set((state) => ({ ... }))
    void set;
    void id;
  },
}));
